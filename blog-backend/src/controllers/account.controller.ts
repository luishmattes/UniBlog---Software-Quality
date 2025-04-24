import { FastifyReply, FastifyRequest } from 'fastify';
import { createUser, authenticateUser } from '../services/account.service';
import { z } from 'zod';

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = bodySchema.parse(request.body);

  const user = await createUser({ name, email, password });

  return reply.status(201).send(user);
}

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const { email, password } = bodySchema.parse(request.body);

  const token = await authenticateUser({ email, password });

  return reply.send({ token });
}
