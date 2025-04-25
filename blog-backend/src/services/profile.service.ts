import { PrismaClient } from '@/generated/prisma';

const db = new PrismaClient();

interface ProfileDataInterface {
  id: number;
  name: string;
  email: string;
  bio?: string;
  createdAt?: Date;
  foto?: string;
  matricula: string;
}


export async function createProfileService({ id, name, email, bio, foto, matricula, }: ProfileDataInterface) {
  const createdProfile = await db.t_Perfil.create({
    data: {
      id_Account_Perfil: id,
      foto_Perfil: foto,
      matricula_Perfil: matricula,
      nome_Perfil: name,
      email_Perfil: email,
      descricao_Perfil: bio || null,
      createdAt_Perfil: new Date(),
      updatedAt_Perfil: new Date(),
    },
  });
  return createdProfile;
}




export async function getUserProfile(userId: number) {
  const getProfile = await db.t_Perfil.findUnique({
    where: { id_Perfil: userId },
    select: { id_Perfil: true, nome_Perfil: true, email_Perfil: true, descricao_Perfil: true, foto_Perfil: true, matricula_Perfil: true },
  });

  return getProfile;
}

export async function updateUserProfile({ id, name, email, bio, foto, matricula }: ProfileDataInterface) {
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