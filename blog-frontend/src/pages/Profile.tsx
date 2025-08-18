import React, { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';

interface ProfileData {
    id_Perfil: number;
    nome_Perfil: string;
    email_Perfil: string;
    descricao_Perfil: string;
    foto_Perfil: string;
    tipo_Perfil: string;
    semestre_Perfil: string;
    curso: {
        id_Curso: number;
        nome_Curso: string;
    };
}

export const Profile: React.FC = () => {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [error, setError] = useState<string>('');
    const { fetchWithAuth } = useApi();
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const data = await fetchWithAuth('/profile/get');
            setProfile(data);
        } catch (err) {
            console.error('Erro ao buscar perfil:', err);
            setError('Erro ao carregar o perfil');
        }
    };

    if (error) {
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }

    if (!profile) {
        return <div className="text-center mt-4">Carregando...</div>;
    }

    return (
        <div className="bg-gray-800 min-h-screen w-[40rem] flex flex-col items-center justify-center">
            <button
                className="self-start mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                onClick={() => navigate('/select-profile')}
            >
                Voltar para escolha de perfil
            </button>
            <h1 className="text-2xl font-bold mb-6 text-white">Perfil</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold">{profile.nome_Perfil}</h2>
                        <p className="text-gray-600">{profile.email_Perfil}</p>
                    </div>

                    {profile.descricao_Perfil && (
                        <div>
                            <h3 className="text-lg font-medium">Descrição</h3>
                            <p className="text-gray-700">{profile.descricao_Perfil}</p>
                        </div>
                    )}

                    {profile.foto_Perfil && (
                        <div className="flex justify-center">
                            <img
                                src={profile.foto_Perfil}
                                alt={profile.nome_Perfil}
                                className="w-32 h-32 rounded-full object-cover"
                            />
                        </div>
                    )}

                    <div>
                        <h3 className="text-lg font-medium">Tipo de Perfil</h3>
                        <p className="text-gray-700">{profile.tipo_Perfil}</p>
                    </div>

                    {profile.tipo_Perfil === 'PESSOAL' && (
                        <>
                            {profile.semestre_Perfil && (
                                <div>
                                    <h3 className="text-lg font-medium">Semestre</h3>
                                    <p className="text-gray-700">{profile.semestre_Perfil}º semestre</p>
                                </div>
                            )}

                            {profile.curso && (
                                <div>
                                    <h3 className="text-lg font-medium">Curso</h3>
                                    <p className="text-gray-700">{profile.curso.nome_Curso}</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
