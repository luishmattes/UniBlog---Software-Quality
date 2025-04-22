import { hash, compare } from 'bcryptjs';
import { PrismaClient } from '@prisma/client'; 
import { app } from '../app';

interface CreateUserData {
  name: string;
  email: string;
  password: string;
}

const db = new PrismaClient();

export async function createUser({ name, email, password }: CreateUserData) {
  const hashedPassword = await hash(password, 8);

  const user = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { id: user.id, name: user.name, email: user.email };
}

export async function authenticateUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user || !(await compare(password, user.password))) {
    throw new Error('Credenciais inválidas');
  }

  const token = app.jwt.sign(
    { id: user.id, name: user.name },
    { expiresIn: '7d' }
  );

  return token;
}
