import { hash, compare } from 'bcryptjs';
import { PrismaClient } from '@/generated/prisma'; 
import { app } from '../app';

const db = new PrismaClient();
interface AccountDataInterface {
  id?: number;
  name: string;
  email: string;
  password: string;
  matricula: string;
}


export async function createAccountService({ name, email, password, matricula }: AccountDataInterface) {
  const hashedPassword = await hash(password, 8);

  const Account = await db.t_Account.create({
    data: {
      nome_Account: name,
      email_Account: email,
      password_Account: hashedPassword,
      matricula_Account: matricula
    },
  });

  return { id: Account.id_Account, name: Account.nome_Account, email: Account.email_Account };
}

export async function updateAccountService({id, name, email, password }: AccountDataInterface) {
  const hashedPassword = await hash(password, 8);

  const Account = await db.t_Account.update({
    where: { id_Account: id },
    data: {
      nome_Account: name,
      email_Account: email,
      password_Account: hashedPassword,
    },
  });

  return { id: Account.id_Account, name: Account.nome_Account, email: Account.email_Account };
}




export async function authenticateAccountService({ email, password,}: {
  email: string;
  password: string;
}) {
  const Account = await db.t_Account.findUnique({
    where: { email_Account: email },
  });

  if (!Account || !(await compare(password, Account.password_Account))) {
    throw new Error('Credenciais inválidas');
  }

  const token = app.jwt.sign(
    { id: Account.id_Account, name: Account.nome_Account },
    { expiresIn: '7d' }
  );

  return token;
}
