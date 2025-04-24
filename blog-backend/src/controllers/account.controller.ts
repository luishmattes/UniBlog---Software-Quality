import { FastifyReply, FastifyRequest } from 'fastify';
import { createAccountService, authenticateAccountService } from '../services/account.service';
import { number, z } from 'zod';

export async function createAccountController(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    id: z.number().int().positive(),
    name: z.string().max(100),
    email: z.string().email().regex(/^[a-zA-Z0-9._%+-]+@unochapeco\.com$/),
    matricula: z.string().max(20),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  });

  const { name, email, password, confirmPassword, matricula } = bodySchema.parse(request.body);

  if (password !== confirmPassword) {
    return reply.status(400).send({ error: "Passwords nao coincidem" });
  }

  const newAccount = await createAccountService({ name, email, password, matricula });

  return reply.status(201).send(newAccount);
}

export async function loginAccountController(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = bodySchema.parse(request.body);

  const token = await authenticateAccountService({ email, password });

  return reply.status(200).send({ token });
}
