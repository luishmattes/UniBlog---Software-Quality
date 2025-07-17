import React from 'react';
import { PostData } from '../../types/post';
import InteractionBar from '../InteractionBar';
import CommentSection from '../commentSection';

interface PostProps {
    post: PostData;
    onInteractionSuccess: () => void;
}

const Post: React.FC<PostProps> = ({ post, onInteractionSuccess }) => {
    if (!post) return null;

    const {
        title_Post,
        content_Post,
        image_Post,
        TAG_Post,
        createdAt_Post,
        T_Perfil,
        T_PostInteracaoCapa
    } = post;

    const currentUserProfileId = Number(localStorage.getItem('id_Perfil'));

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <img
                        src={T_Perfil?.foto_Perfil || '/default-avatar.png'}
                        alt={T_Perfil?.nome_Perfil || 'Usuário'}
                        className="w-10 h-10 rounded-full border border-blue-700 object-cover"
                    />
                    <strong className="text-sm text-gray-900">{T_Perfil?.nome_Perfil || 'Usuário'}</strong>
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
                    <img src={image_Post} alt={title_Post || 'Imagem do post'} className="w-full object-cover" />
                </div>
            )}

            {content_Post && (
                <p className="text-sm text-gray-800 whitespace-pre-line mb-3">{content_Post}</p>
            )}
            {TAG_Post && (
                <div className="text-xs text-gray-500 mb-3">
                    <span className="font-semibold">Tags:</span> {TAG_Post}
                </div>
            )}


            <div className="mt-4 pt-2 border-t border-gray-100">
                {/* <div className="flex gap-x-4 gap-y-1 text-xs text-gray-500 mb-3 flex-wrap">
                    <span>{T_PostInteracaoCapa?.visualizacao_PIC} visualizações</span>
                    <span>{T_PostInteracaoCapa?.curtidas_PIC?.length || 0} curtidas</span>
                    <span>{T_PostInteracaoCapa?.comentarios_PIC?.length || 0} comentários</span>
                </div> */}



                <InteractionBar
                    initialLikesCount={T_PostInteracaoCapa?.curtidas_PIC.length || 0}
                    initialCurtidas={T_PostInteracaoCapa?.curtidas_PIC || []}
                    currentUserProfileId={currentUserProfileId}
                    onInteractionSuccess={onInteractionSuccess}
                    id_PIC_Curtida={T_PostInteracaoCapa?.id_PIC}
                    totalVisualizacoes={T_PostInteracaoCapa?.visualizacao_PIC?.length || 0}
                />


                <CommentSection
                    comentarios={T_PostInteracaoCapa?.comentarios_PIC || []}
                    id_PIC_Comentario={T_PostInteracaoCapa?.id_PIC}
                    currentUserProfileId={currentUserProfileId}
                    onCommentSuccess={onInteractionSuccess}
                />
            </div>
        </div>
    );
};

export default Post;
