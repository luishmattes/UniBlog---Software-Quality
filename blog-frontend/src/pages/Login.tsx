import React, { useEffect } from 'react';
import { LoginAccount } from '../components/LoginAccount';
import { useAuth } from '../contexts/AuthContext';

export const Login: React.FC = () => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            window.location.href = '/feed';
        }
    }, [isAuthenticated]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {isAuthenticated ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Bem-vindo de volta!
                    </h2>
                    <p className="text-gray-600">Redirecionando...</p>
                </div>
            ) : (
                <LoginAccount />
            )}
        </div>
    );
};

export default Login;

