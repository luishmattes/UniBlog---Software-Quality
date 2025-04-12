import { FastifyRequest, FastifyReply } from 'fastify';
import { createNewPost, getFeed } from '../services/post.service';
import { z } from 'zod';

export async function createPost(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    content: z.string().min(1),
  });

  const { content } = bodySchema.parse(request.body);
  const userId = (request.user as any).id;

  const post = await createNewPost(userId, content);
  return reply.status(201).send(post);
}

export async function getUserFeed(request: FastifyRequest, reply: FastifyReply) {
  const userId = (request.user as any).id;
  const feed = await getFeed(userId);
  return reply.send(feed);
}
