import { useAuth } from '../contexts/AuthContext';

interface FetchOptions extends RequestInit {
    requireAuth?: boolean;
}

export const useApi = () => {
    const { token, profileId } = useAuth();
    const baseUrl = 'http://localhost:3333';

    const fetchWithAuth = async (endpoint: string, options: FetchOptions = {}) => {
        const { requireAuth = true, headers: customHeaders, ...restOptions } = options;

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...(customHeaders as Record<string, string>),
        };

        if (requireAuth) {
            if (!token) {
                throw new Error('No authentication token available');
            }
            headers['Authorization'] = `Bearer ${token}`;

            if (profileId) {
                headers['id_Perfil'] = profileId;
            }
        }

        const response = await fetch(`${baseUrl}${endpoint}`, {
            ...restOptions,
            headers,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro na requisição');
        }

        return data;
    };

    return { fetchWithAuth };
}; 