import { PrismaClient } from '../generated/prisma';

const db = new PrismaClient();
interface CreateProfileDataInterface {
  nome_Perfil: string;
  email_Perfil: string;
  descricao_Perfil?: string;
  foto_Perfil?: string;
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



export async function createProfileService(data: CreateProfileDataInterface, accountId: number) {
  const createdProfile = await db.t_Perfil.create({
    data: {
      nome_Perfil: data.nome_Perfil,
      email_Perfil: data.email_Perfil,
      descricao_Perfil: data.descricao_Perfil,
      foto_Perfil: data.foto_Perfil,
      id_Account_Perfil: accountId,
    },
  });
  return createdProfile;
}

export async function updateProfileService(data: UpdateProfileDataInterface) {
  const updatedProfile = await db.t_Perfil.update({
    where: { id_Perfil: data.id_Perfil },
    data: {
      nome_Perfil: data.nome_Perfil,
      email_Perfil: data.email_Perfil,
      descricao_Perfil: data.descricao_Perfil,
      foto_Perfil: data.foto_Perfil,
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

export async function getProfileService(id_Account_Perfil: number) {
  const getProfile = await db.t_Perfil.findFirst({
    where: { id_Account_Perfil },
  });

  if (!getProfile) {
    throw new Error('Perfil não encontrado.');
  }

  return getProfile;
}
