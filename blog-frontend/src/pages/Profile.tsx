import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        const id_Perfil = localStorage.getItem('id_Perfil');
        if (!id_Perfil) {
            setError('ID do perfil não encontrado');
            return;
        }

        fetch('http://localhost:3333/profile/get', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'id_Perfil': id_Perfil
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erro ao buscar perfil');
                }
                return res.json();
            })
            .then(data => setProfile(data))
            .catch(err => {
                console.error('Erro ao buscar perfil:', err);
                setError('Erro ao carregar o perfil');
            });
    }, []);

    if (error) {
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }

    if (!profile) {
        return <div className="text-center mt-4">Carregando...</div>;
    }

    return (
        <div className="bg-gray-800 min-h-screen w-[40rem] flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-6">Perfil</h1>
            <div key={profile.id_Perfil}>
                <h2>{profile.nome_Perfil}</h2>
                <p>{profile.email_Perfil}</p>
                <p>{profile.descricao_Perfil}</p>
                <img src={profile.foto_Perfil} alt={profile.nome_Perfil} />
                <p>{profile.tipo_Perfil}</p>
                <p>{profile.semestre_Perfil}</p>
                <p>{profile.curso.nome_Curso}</p>
            </div>
        </div>
    );
};
