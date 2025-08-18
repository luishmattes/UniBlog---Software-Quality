import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from 'react-icons/ai';

interface InteractionBarProps {
    initialLikesCount: number;
    initialCurtidas: { id_Perfil_Curtida: number }[];
    currentUserProfileId: number;
    onInteractionSuccess: () => void;
    id_PIC_Curtida: number;
    totalVisualizacoes: number;
}

const InteractionBar: React.FC<InteractionBarProps> = ({
    initialLikesCount,
    initialCurtidas,
    currentUserProfileId,
    onInteractionSuccess,
    id_PIC_Curtida,
    totalVisualizacoes
}) => {
    const [likesCount, setLikesCount] = useState(initialLikesCount);
    const [liked, setLiked] = useState(
        initialCurtidas.some(c => c.id_Perfil_Curtida === currentUserProfileId)
    );
    const [loading, setLoading] = useState(false);

    const toggleLike = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const method = liked ? 'DELETE' : 'POST';

            const payload = {
                id_PIC_Curtida,
                id_Perfil_Curtida: currentUserProfileId,
            };

            console.log('Dados enviados:', {
                id_PIC_Curtida,
                currentUserProfileId
            });

            await fetch('http://localhost:3333/int/', {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'id_Perfil': String(currentUserProfileId),
                },
                body: JSON.stringify(payload),
            });

            setLiked(!liked);
            setLikesCount(prev => liked ? prev - 1 : prev + 1);
            onInteractionSuccess();
        } catch (error) {
            console.error('Erro ao interagir com curtida:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center gap-6 text-sm">
            <button
                onClick={toggleLike}
                disabled={loading}
                className="flex items-center gap-1 text-red-600 hover:text-red-700 transition"
            >
                {liked ? <AiFillHeart size={18} /> : <AiOutlineHeart size={18} />}
                <span>{likesCount}</span>
            </button>

            <div className="flex items-center gap-1 text-gray-600">
                <AiOutlineEye size={18} />
                <span>{totalVisualizacoes}</span>
            </div>
        </div>
    );
};

export default InteractionBar;
