import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useApi } from '../hooks/useApi';

interface Profile {
    id_Perfil: string;
    nome_Perfil: string;
}

export const ProfileSelection: React.FC = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [error, setError] = useState('');
    const { setProfileId } = useAuth();
    const { fetchWithAuth } = useApi();
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        try {
            const data = await fetchWithAuth('/profile/take/profiles');
            setProfiles(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao carregar perfis');
        }
    };

    const handleProfileSelect = async (profileId: string) => {
        try {
            localStorage.setItem('id_Perfil', profileId);
            setProfileId(profileId);
            navigate('/feed');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao selecionar perfil');
        }
    };

    const handleCreateProfile = async () => {
        try {
            await fetchWithAuth('/profile/create', {
                method: 'POST',
                body: JSON.stringify({
                    nome_Perfil: `Perfil ${profiles.length + 1}`
                })
            });

            fetchProfiles();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao criar perfil');
        }
    };

    return (
        <div className="w-full max-w-4xl p-6 mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Quem está usando?</h2>

            {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {profiles.map((profile) => (
                    <button
                        key={profile.id_Perfil}
                        onClick={() => handleProfileSelect(profile.id_Perfil)}
                        className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-24 h-24 bg-indigo-600 rounded-full mb-4 flex items-center justify-center">
                            <span className="text-2xl text-white">
                                {profile.nome_Perfil.charAt(0)}
                            </span>
                        </div>
                        <span className="text-lg font-medium">{profile.nome_Perfil}</span>
                    </button>
                ))}

                {profiles.length < 4 && (
                    <button
                        onClick={handleCreateProfile}
                        className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-24 h-24 border-2 border-dashed border-gray-400 rounded-full mb-4 flex items-center justify-center">
                            <span className="text-4xl text-gray-400">+</span>
                        </div>
                        <span className="text-lg font-medium text-gray-600">Adicionar Perfil</span>
                    </button>
                )}
            </div>
        </div>
    );
}; 