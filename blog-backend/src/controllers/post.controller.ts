import { FastifyRequest, FastifyReply } from 'fastify';
import { createPostService, deletePostService, getPostService } from '../services/post.service';
import { createPostSchema, deletePostSchema, getPostSchema } from '../schemas/post.schema'

export async function createPostController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = createPostSchema.parse(request.body);

        const perfilId = Number(request.headers['perfil-id']);
        if (!perfilId) {
            return reply.status(400).send({ error: 'ID do perfil não fornecido no header' });
        }

        const post = await createPostService(data, perfilId);
        return reply.status(201).send(post);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro de validação',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function deletePostController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const perfilId = Number(request.headers['perfil-id']);
        const postId = deletePostSchema.parse(request.params);
        const post = await deletePostService(postId, perfilId);
        return reply.status(200).send(post);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro de validação',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function getPostController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id_Post } = getPostSchema.parse(request.params);
        const perfilId = Number(request.headers['perfil-id']);

        if (!perfilId) {
            return reply.status(400).send({ error: 'ID do perfil não fornecido no header' });
        }

        const post = await getPostService({ id_Post }, perfilId);


        return reply.status(200).send(post);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro de validação',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}