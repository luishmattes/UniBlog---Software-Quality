import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'
import { signToken } from '../utils/jwt'

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

export async function register(req: FastifyRequest, reply: FastifyReply) {
  const data = registerSchema.parse(req.body)

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const user = await prisma.user.create({
    data: { ...data, password: hashedPassword },
  })

  return reply.send({ id: user.id, email: user.email })
}

export async function login(req: FastifyRequest, reply: FastifyReply) {
  const { email, password } = z
    .object({ email: z.string().email(), password: z.string() })
    .parse(req.body)

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return reply.status(401).send({ error: 'Invalid credentials' })
  }

  const token = signToken(user.id)
  return reply.send({ token })
}
