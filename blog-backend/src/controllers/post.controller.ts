import { FastifyRequest, FastifyReply } from 'fastify';
import { createPostService, updatePostService, deletePostService } from '../services/post.service';
import { createPostSchema, updatePostSchema, deletePostSchema } from '../schemas/post.schema'
import { z } from 'zod';


export async function createPostController(request: FastifyRequest, reply: FastifyReply) {

}

export async function updatePostController(request: FastifyRequest, reply: FastifyReply) {

}
export async function deletePostController(request: FastifyRequest, reply: FastifyReply) {

}