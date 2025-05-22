import React from 'react';

interface PostProps {
    title_Post?: string;
    content_Post?: string;
    image_Post?: string;
    createdAt_Post: string;
    perfil: {
        nome_Perfil: string;
        foto_Perfil: string;
    };
}

export const Post: React.FC<PostProps> = ({
    title_Post,
    content_Post,
    image_Post,
    createdAt_Post,
    perfil,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <img
                        src={perfil.foto_Perfil}
                        alt={perfil.nome_Perfil}
                        className="w-10 h-10 rounded-full border border-blue-700 object-cover"
                    />
                    <strong className="text-sm text-gray-900">{perfil.nome_Perfil}</strong>
                </div>
                <span className="text-xs text-gray-400 mt-1">
                    {new Date(createdAt_Post).toLocaleDateString('pt-BR')}
                </span>
            </div>

            {title_Post && (
                <h2 className="font-bold text-gray-800 text-base mb-2">{title_Post}</h2>
            )}

            {image_Post && (
                <div className="rounded-lg overflow-hidden mb-3">
                    <img src={image_Post} alt="Imagem do post" className="w-full object-cover" />
                </div>
            )}

            {content_Post && (
                <p className="text-sm text-gray-800 whitespace-pre-line">{content_Post}</p>
            )}
        </div>
    );
};
