import { FastifyRequest, FastifyReply } from 'fastify';
import { getUserProfile, updateUserProfile } from '../services/perfil.service';
import { z } from 'zod';

export async function getProfile(request: FastifyRequest, reply: FastifyReply) {
  const userId = (request.user as any).id;

  const user = await getUserProfile(userId);
  return reply.send(user);
}

export async function updateProfile(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string().optional(),
    bio: z.string().optional(),
  });

  const { name, bio } = bodySchema.parse(request.body);
  const userId = (request.user as any).id;

  const updated = await updateUserProfile(userId, { name, bio });
  return reply.send(updated);
}
