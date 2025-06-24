import { FastifyRequest, FastifyReply } from 'fastify';
import { curtirService, descurtirService, comentarService, deletarComentarioService, getInteracoesByPostIdService } from '../services/interacoes.service';
import { curtirSchema, comentarSchema, deletarComentarioSchema } from '../schemas/interacoes.schema';
import { idProfileSchema } from '../schemas/profile.schema';

export async function curtirController(request: FastifyRequest, reply: FastifyReply) {
    try {

        const data = curtirSchema.parse(request.body);

        const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_Perfil'] });

        if (!id_Perfil) {
            return reply.status(400).send({ error: 'ID do perfil não fornecido no header' });
        }

        const result = await curtirService({ ...data, id_Perfil_Curtida: id_Perfil });

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

        const data = curtirSchema.parse(request.body);
        const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_Perfil'] });

        if (!id_Perfil) {
            return reply.status(400).send({ error: 'ID do perfil não fornecido no header' });
        }

        const result = await descurtirService({ ...data, id_Perfil_Curtida: id_Perfil });
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
        const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_Perfil'] });
        if (!id_Perfil) {
            return reply.status(400).send({ error: 'ID do perfil não fornecido no header' });
        }

        const result = await comentarService({ ...data, id_Perfil_Comentario: id_Perfil });
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
        const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_Perfil'] });

        if (!id_Perfil) {
            return reply.status(400).send({ error: 'ID do perfil não fornecido no header' });
        }

        const result = await deletarComentarioService({
            id_PIC_Comentario: data.id_PIC_Comentario,
            id_Perfil_Comentario: id_Perfil,
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
