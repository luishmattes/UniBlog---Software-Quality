import { hash, compare } from 'bcryptjs';
import { PrismaClient } from '@/generated/prisma';
import { app } from '../app';

const db = new PrismaClient();
interface AccountDataInterface {
  id?: number;
  nome_Account: string;
  email_Account: string;
  matricula_Account: string;
  password_Account: string;
  confirmPassword_Account: string;
}


export async function createAccountService({ nome_Account, email_Account, password_Account, confirmPassword_Account, matricula_Account }: AccountDataInterface) {
  if (password_Account !== confirmPassword_Account) {
    throw new Error('As senhas não coincidem.');
  }
  const hashedPassword = await hash(password_Account, 8);

  const Account = await db.t_Account.create({
    data: {
      nome_Account: nome_Account,
      email_Account: email_Account,
      password_Account: hashedPassword,
      matricula_Account: matricula_Account
    },
  });

  return Account;
}

export async function updateAccountService({ id, nome_Account, email_Account, password_Account }: AccountDataInterface) {
  const hashedPassword = await hash(password_Account, 8);

  const Account = await db.t_Account.update({
    where: { id_Account: id },
    data: {
      nome_Account: nome_Account,
      email_Account: email_Account,
      password_Account: hashedPassword,
    },
  });

  return { id: Account.id_Account, name: Account.nome_Account, email: Account.email_Account };
}




export async function authenticateAccountService({ email_Account, password_Account, }: {
  email_Account: string;
  password_Account: string;
}) {
  const Account = await db.t_Account.findUnique({
    where: { email_Account: email_Account },
  });

  if (!Account || !(await compare(password_Account, Account.password_Account))) {
    throw new Error('Credenciais inválidas');
  }

  const token = app.jwt.sign(
    { id: Account.id_Account, name: Account.nome_Account },
    { expiresIn: '7d' }
  );

  return token;
}
