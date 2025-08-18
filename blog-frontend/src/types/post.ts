export interface Curtida {
    id_Curtida: number;
    id_Perfil_Curtida: number;
    id_PIC_Curtida: number;
}

export interface Comentario {
    id_Comentario: number;
    id_Perfil_Comentario: number;
    conteudo_Comentario: string;
    id_PIC_Comentario: number;
}

export interface Perfil {
    id_Perfil: number;
    nome_Perfil: string;
    foto_Perfil: string;
}

export interface PostData {
    id_Post: number;
    title_Post?: string;
    content_Post?: string;
    image_Post?: string;
    TAG_Post?: string;
    createdAt_Post: string;
    T_Perfil?: Perfil;
    T_PostInteracaoCapa: {
        id_PIC: number;
        id_Post_PIC: number;
        visualizacao_PIC?: number[];
        curtidas_PIC: Curtida[];
        comentarios_PIC: Comentario[];
    }
}
