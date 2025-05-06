import { FastifyRequest, FastifyReply } from 'fastify';
import { createPostService, updatePostService, deletePostService } from '../services/post.service';
import { createPostSchema, updatePostSchema, deletePostSchema } from '../schemas/post.schema'


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

export async function updatePostController(request: FastifyRequest, reply: FastifyReply) {

    try {
        const data = updatePostSchema.parse(request.body);
        const post = await updatePostService(data);
        return reply.status(200).send(post);
    } catch (error) {
        return reply.status(400).send({ error: 'Erro de validação', details: error });
    }
}
export async function deletePostController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = deletePostSchema.parse(request.body);
        const post = await deletePostService(data);
        return reply.status(200).send(post);
    } catch (error) {
        return reply.status(400).send({ error: 'Erro de validação', details: error });
    }
}
