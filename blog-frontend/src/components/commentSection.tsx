import React, { useState } from 'react';

interface Comentario {
    id_PIC_Comentario: number;
    id_Perfil_Comentario: number;
    conteudo_Comentario: string;
}

interface CommentSectionProps {
    comentarios: Comentario[];
    id_PIC_Comentario: number;
    currentUserProfileId: number;
    onCommentSuccess: () => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({
    comentarios,
    id_PIC_Comentario,
    currentUserProfileId,
    onCommentSuccess
}) => {
    const [conteudo, setConteudo] = useState('');
    const [loading, setLoading] = useState(false);

    const handleComment = async () => {
        if (!conteudo.trim() || loading) return;

        setLoading(true);

        try {
            await fetch('http://localhost:3333/int/comentario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id_Perfil': String(currentUserProfileId)
                },
                body: JSON.stringify({
                    id_PIC_Comentario,
                    conteudo_Comentario: conteudo
                })
            });

            setConteudo('');
            onCommentSuccess();
        } catch (err) {
            console.error('Erro ao comentar:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Comentários:</h4>

            {comentarios.length === 0 && (
                <p className="text-xs text-gray-500 mb-2">Seja o primeiro a comentar!</p>
            )}

            {comentarios.map((comentario, index) => (
                <div key={index} className="text-xs bg-gray-50 p-2 rounded mb-2">
                    <span className="font-semibold text-gray-800">
                        {comentario.id_Perfil_Comentario}:
                    </span>{' '}
                    <span className="text-gray-700">{comentario.conteudo_Comentario}</span>
                </div>
            ))}

            <div className="flex gap-2 mt-2">
                <input
                    type="text"
                    placeholder="Escreva um comentário..."
                    className="flex-1 text-xs px-3 py-2 border rounded-md"
                    value={conteudo}
                    onChange={(e) => setConteudo(e.target.value)}
                />
                <button
                    onClick={handleComment}
                    disabled={loading}
                    className="text-xs bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
                >
                    Comentar
                </button>
            </div>
        </div>
    );
};

export default CommentSection;
