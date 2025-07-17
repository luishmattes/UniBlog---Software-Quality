import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    profileId: string | null;
    login: (token: string, id_Perfil: string) => void;
    logout: () => void;
    setProfileId: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [profileId, setProfileId] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedProfileId = localStorage.getItem('id_Perfil');
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
            if (storedProfileId) {
                setProfileId(storedProfileId);
            }
        }
    }, []);

    const login = (newToken: string, id_Perfil: string) => {
        localStorage.setItem('token', newToken);
        if (id_Perfil) {
            localStorage.setItem('id_Perfil', id_Perfil);
            setProfileId(id_Perfil);
        }
        setToken(newToken);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id_Perfil');
        setToken(null);
        setProfileId(null);
        setIsAuthenticated(false);
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            token,
            profileId,
            login,
            logout,
            setProfileId
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 