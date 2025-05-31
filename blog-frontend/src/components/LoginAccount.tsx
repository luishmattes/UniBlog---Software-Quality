import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface LoginData {
    email_Account: string;
    password_Account: string;
}

export const LoginAccount: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [formData, setFormData] = useState<LoginData>({
        email_Account: '',
        password_Account: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const endpoint = isCreatingAccount ? '/account/create' : '/account/login';
            const response = await fetch(`http://localhost:3333${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erro na operação');
            }

            if (data.token) {
                login(data.token, data.id_Perfil || '');
                if (isCreatingAccount || !data.id_Perfil) {
                    navigate('/select-profile');
                } else {
                    navigate('/feed');
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao processar requisição');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
                {isCreatingAccount ? 'Criar Conta' : 'Login'}
            </h2>

            {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email_Account"
                        value={formData.email_Account}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Senha
                    </label>
                    <input
                        type="password"
                        name="password_Account"
                        value={formData.password_Account}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {isCreatingAccount ? 'Criar Conta' : 'Entrar'}
                </button>

                <button
                    type="button"
                    onClick={() => setIsCreatingAccount(!isCreatingAccount)}
                    className="w-full text-sm text-indigo-600 hover:text-indigo-500"
                >
                    {isCreatingAccount
                        ? 'Já tem uma conta? Faça login'
                        : 'Não tem uma conta? Crie uma'}
                </button>
            </form>
        </div>
    );
};

