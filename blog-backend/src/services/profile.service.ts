import { PrismaClient } from '../generated/prisma';

const db = new PrismaClient();

interface CreateProfileDataInterface {
  name: string;
  email: string;
  bio?: string;
  foto?: string;
  matricula: string;
}
interface UpdateProfileDataInterface {
  id: number;
  name?: string;
  email?: string;
  bio?: string;
  foto?: string;
  matricula?: string;
}

interface GetProfileDataInterface {
  id: number;
}


export async function createProfileService({ name, email, bio, foto, matricula, }: CreateProfileDataInterface) {
  const createdProfile = await db.t_Perfil.create({
    data: {
      foto_Perfil: foto,
      matricula_Perfil: matricula,
      nome_Perfil: name,
      email_Perfil: email,
      descricao_Perfil: bio || null,
    },
  });
  return createdProfile;
}

export async function updateUserProfile({ id, name, email, bio, foto, matricula }: UpdateProfileDataInterface) {
  const updatedProfile = await db.t_Perfil.update({
    where: { id_Perfil: id },
    data: {
      nome_Perfil: name,
      email_Perfil: email,
      descricao_Perfil: bio || null,
      foto_Perfil: foto,
      matricula_Perfil: matricula,
      updatedAt_Perfil: new Date(),
    },
  });

  return updatedProfile;
}


export async function getUserProfile({ id }: GetProfileDataInterface) {
  const userId = Number(id);
  const getProfile = await db.t_Perfil.findUnique({
    where: { id_Perfil: userId },
    select: { id_Perfil: true, nome_Perfil: true, email_Perfil: true, descricao_Perfil: true, foto_Perfil: true, matricula_Perfil: true },
  });

  if (!getProfile) {
    throw new Error('Profile not found');
  }

  return getProfile;
}
