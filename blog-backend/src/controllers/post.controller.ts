import { FastifyRequest, FastifyReply } from 'fastify';
import { createPostService, updatePostService, deletePostService } from '../services/post.service';
import { createPostSchema, updatePostSchema, deletePostSchema } from '../schemas/post.schema'
import { z } from 'zod';


export async function createPostController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = createPostSchema.parse(request.body);
        const post = await createPostService(data);
        return reply.status(201).send(post);
    } catch (error) {
        return reply.status(400).send({ error: 'Erro de validação', details: error });
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

}