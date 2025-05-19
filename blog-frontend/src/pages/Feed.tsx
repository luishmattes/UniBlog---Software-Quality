// src/pages/Feed.tsx
import React, { useEffect, useState } from 'react';
import { Post } from '../components/Posts';

interface PostData {
    id_Post: number;
    title_Post?: string;
    content_Post?: string;
    image_Post?: string;
    createdAt_Post: string;
    perfil: {
        nome_Perfil: string;
        foto_Perfil: string;
    };
}


export const Feed: React.FC = () => {
    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        fetch('http://localhost:3333/posts/', {
            headers: {
                authorization: `Bearer ${('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9BY2NvdW50IjoxMywiaWF0IjoxNzQ3NjAyMzQ0LCJleHAiOjE3NDgyMDcxNDR9.uPl3vBbhojHFhf6hNDk2Wb-4N1Fl2LckY6VpmA0paSw')}`,
            },
        })
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error('Erro ao buscar posts', err));
    }, []);

    return (
        <div className="bg-gray-800 min-h-screen w-[40rem] flex flex-col items-center justify-center">

            <div className="max-w-2xl mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-6">Feed</h1>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <Post
                            key={post.id_Post}
                            title_Post={post.title_Post}
                            content_Post={post.content_Post}
                            image_Post={post.image_Post}
                            createdAt_Post={(post.createdAt_Post)}
                            perfil={{
                                nome_Perfil: post.perfil.nome_Perfil,
                                foto_Perfil: post.perfil.foto_Perfil
                            }}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">Nenhuma publicação ainda.</p>
                )}
            </div>
        </div>

    );
};
