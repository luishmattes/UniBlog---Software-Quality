import { PrismaClient } from '../generated/prisma';

const db = new PrismaClient();
interface CreateProfileDataInterface {
  nome_Perfil: string;
  matricula_Perfil: string;
  email_Perfil: string;
  descricao_Perfil?: string;
  foto_Perfil?: string;
  id_Account_Perfil: number;
}
interface UpdateProfileDataInterface {
  id_Perfil: number;
  nome_Perfil?: string;
  email_Perfil?: string;
  descricao_Perfil?: string;
  foto_Perfil?: string;
}

interface DeleteProfileDataInterface {
  id_Perfil: number;
}

interface GetProfileDataInterface {
  id_Perfil: number;
}


export async function createProfileService({ nome_Perfil, email_Perfil, descricao_Perfil, foto_Perfil, matricula_Perfil, id_Account_Perfil }: CreateProfileDataInterface) {
  const existingProfile = await db.t_Perfil.findUnique({
    where: { email_Perfil: email_Perfil },
  });

  if (existingProfile) {
    throw new Error('Profile with this email already exists');
  }

  const existingAccount = await db.t_Account.findUnique({
    where: { id_Account: id_Account_Perfil },
  });

  if (!existingAccount) {
    throw new Error('Account not found');
  }

  const accountId = existingAccount.id_Account;
  const accountMatricula = existingAccount.matricula_Account;

  const createdProfile = await db.t_Perfil.create({
    data: {
      foto_Perfil: foto_Perfil,
      matricula_Perfil: accountMatricula,
      nome_Perfil: nome_Perfil,
      email_Perfil: email_Perfil,
      descricao_Perfil: descricao_Perfil,
      id_Account_Perfil: accountId,
    },
  });
  return createdProfile;
}

export async function updateProfileService({ id_Perfil, descricao_Perfil, email_Perfil, foto_Perfil, nome_Perfil }: UpdateProfileDataInterface) {
  const updatedProfile = await db.t_Perfil.update({
    where: { id_Perfil: id_Perfil },
    data: {
      nome_Perfil: nome_Perfil,
      email_Perfil: email_Perfil,
      descricao_Perfil: descricao_Perfil || null,
      foto_Perfil: foto_Perfil,
      updatedAt_Perfil: new Date(),
    },
  });

  return updatedProfile;
}

export async function deleteProfileService({ id_Perfil }: DeleteProfileDataInterface) {
  const deletedProfile = await db.t_Perfil.delete({
    where: { id_Perfil: id_Perfil },
  });

  return deletedProfile;
}

export async function getProfileService({ id_Perfil }: GetProfileDataInterface) {
  const userId = Number(id_Perfil);
  const getProfile = await db.t_Perfil.findUnique({
    where: { id_Perfil: userId },
    select: { id_Perfil: true, nome_Perfil: true, email_Perfil: true, descricao_Perfil: true, foto_Perfil: true, matricula_Perfil: true },
  });

  if (!getProfile) {
    throw new Error('Profile not found');
  }

  return getProfile;
}
