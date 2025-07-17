import React, { useEffect, useState, useCallback } from 'react';
import { Post } from '../components/Posts';
import { PostData } from '../types/post';

export const Feed: React.FC = () => {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [error, setError] = useState<string>('');

    const fetchPosts = useCallback(() => {
        fetch('http://localhost:3333/posts/', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    console.error('Dados recebidos não são um array:', data);
                    setPosts([]);
                    setError('Formato de dados inesperado do servidor.');
                }
            })
            .catch(err => {
                console.error('Erro ao buscar posts:', err);
                setError('Não foi possível carregar as publicações. Tente novamente mais tarde.');

            });
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handleInteractionSuccess = () => {
        fetchPosts();
    };

    if (error) {
        return (
            <div className="bg-gray-800 min-h-screen w-[40rem] flex flex-col items-center justify-center p-4">
                <div className="text-red-400 text-center bg-red-900 bg-opacity-50 p-4 rounded-md">
                    <p className="font-semibold">Oops! Algo deu errado.</p>
                    <p>{error}</p>
                    <button
                        onClick={fetchPosts}
                        className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
                    >
                        Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 min-h-screen w-[40rem] flex flex-col items-center pt-6 pb-6">
            <div className="max-w-2xl w-full mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-gray-100 text-center">Feed de Notícias</h1>
                {posts.length > 0 ? (
                    posts.map(post =>
                        // Ensure post and T_Perfil are valid before rendering
                        post && post.T_Perfil ? (
                            <Post
                                key={post.id_Post}
                                post={{ ...post, T_Perfil: post.T_Perfil! }}
                                onInteractionSuccess={handleInteractionSuccess} // Pass the callback
                            />
                        ) : null
                    )
                ) : (
                    <p className="text-center text-gray-400">Nenhuma publicação encontrada.</p>
                )}
            </div>
        </div>
    );
};