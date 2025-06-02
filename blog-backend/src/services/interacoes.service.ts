import { PrismaClient } from '../generated/prisma';
const db = new PrismaClient();

export interface CurtirData {
    id_PIC_Curtida: number;
    id_Perfil_Curtida: number;
}

export async function curtirService(data: CurtirData) {
    const ifExisting = await db.t_PIC_Curtidas.findFirst({
        where: { id_PIC_Curtida: data.id_PIC_Curtida, id_Perfil_Curtida: data.id_Perfil_Curtida },
    });
    if (ifExisting) {
        throw new Error('Já curtiu este post.');
    }
    const createdLike = await db.t_PIC_Curtidas.create({
        data: { id_PIC_Curtida: data.id_PIC_Curtida, id_Perfil_Curtida: data.id_Perfil_Curtida },
    });

    return createdLike;
}

export async function descurtirService(data: CurtirData) {
    const deleted = await db.t_PIC_Curtidas.deleteMany({
        where: { id_PIC_Curtida: data.id_PIC_Curtida, id_Perfil_Curtida: data.id_Perfil_Curtida },
    });
    if (deleted.count === 0) {
        throw new Error('Curtida não encontrada para remover.');
    }
    return { message: 'Descurtido com sucesso.' };
}


export interface ComentarData {
    id_PIC_Comentario: number;
    id_Perfil_Comentario: number;
    conteudo_Comentario: string;
}

export async function comentarService(data: ComentarData) {
    const createdComment = await db.t_PIC_Comentarios.create({
        data: { id_PIC_Comentario: data.id_PIC_Comentario, id_Perfil_Comentario: data.id_Perfil_Comentario, conteudo_Comentario: data.conteudo_Comentario },
    });

    return createdComment;
}

export async function deletarComentarioService(data: ComentarData) {
    const deleted = await db.t_PIC_Comentarios.deleteMany({
        where: { id_Comentario: data.id_PIC_Comentario, id_Perfil_Comentario: data.id_Perfil_Comentario },
    });
    if (deleted.count === 0) {
        throw new Error('Comentário não encontrado ou não pertence ao perfil.');
    }
    return { message: 'Comentário deletado com sucesso.' };
}
