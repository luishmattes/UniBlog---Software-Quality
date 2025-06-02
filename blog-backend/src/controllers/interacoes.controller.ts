import { FastifyRequest, FastifyReply } from 'fastify';
import { curtirService, descurtirService, comentarService, deletarComentarioService } from '../services/interacoes.service';
import { curtirSchema, comentarSchema, deletarComentarioSchema } from '../schemas/interacoes.schema';

export async function curtirController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = curtirSchema.parse(request.body);
        const result = await curtirService(data);
        return reply.status(201).send(result);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro ao curtir',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function descurtirController(request: FastifyRequest, reply: FastifyReply) {
    try {

        const data = curtirSchema.parse(request.query || request.body);
        const result = await descurtirService(data);
        return reply.status(200).send(result);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro ao descurtir',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function comentarController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = comentarSchema.parse(request.body);
        const result = await comentarService(data);
        return reply.status(201).send(result);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro ao comentar',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function deletarComentarioController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = deletarComentarioSchema.parse(request.query || request.body);
        const result = await deletarComentarioService({
            id_PIC_Comentario: data.id_PIC_Comentario,
            id_Perfil_Comentario: data.id_Perfil_Comentario,
            conteudo_Comentario: ''
        });
        return reply.status(200).send(result);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro ao deletar comentário',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}
