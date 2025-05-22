import { PrismaClient } from '../generated/prisma';

const db = new PrismaClient();
interface CreateProfileDataInterface {
  nome_Perfil: string;
  email_Perfil: string;
  descricao_Perfil?: string;
  foto_Perfil?: string;
  tipo_Perfil: 'PESSOAL' | 'COMUNIDADE';
  cursoId?: number;
  semestre_Perfil?: number;
}
interface UpdateProfileDataInterface {
  id_Perfil: number;
  nome_Perfil?: string;
  email_Perfil?: string;
  descricao_Perfil?: string;
  foto_Perfil?: string;
  tipo_Perfil?: 'PESSOAL' | 'COMUNIDADE';
  cursoId?: number;
  semestre_Perfil?: number;
}

interface DeleteProfileDataInterface {
  id_Perfil: number;
}



export async function createProfileService(data: CreateProfileDataInterface, accountId: number) {
  if (data.tipo_Perfil === 'PESSOAL') {
    if (!data.cursoId) {
      throw new Error('cursoId é obrigatório para perfil pessoal.');
    }
    if (!data.semestre_Perfil) {
      throw new Error('semestre é obrigatório para perfil pessoal.');
    }
      // Busca o curso para validar o semestre
    const curso = await db.t_Curso.findUnique({
      where: { id_Curso: data.cursoId }
    });
    if (!curso) {
      throw new Error('Curso não encontrado.');
    }
    if (data.semestre_Perfil < 1 || data.semestre_Perfil > curso.maxSemestres) {
      throw new Error(`O semestre deve ser entre 1 e ${curso.maxSemestres}.`);
    }
  }
  const createdProfile = await db.t_Perfil.create({
    data: {
      nome_Perfil: data.nome_Perfil,
      email_Perfil: data.email_Perfil,
      descricao_Perfil: data.descricao_Perfil,
      foto_Perfil: data.foto_Perfil,
      id_Account_Perfil: accountId,
      tipo_Perfil: data.tipo_Perfil,
      cursoId: data.tipo_Perfil === 'PESSOAL' ? data.cursoId : undefined,
      semestre_Perfil: data.tipo_Perfil === 'PESSOAL' ? data.semestre_Perfil : undefined,
    },
  });
  return createdProfile;
}

export async function updateProfileService(data: UpdateProfileDataInterface) {
  const getProfile = await db.t_Perfil.findFirst({
    where: { id_Perfil: data.id_Perfil },
  });
  if (!getProfile) {
    throw new Error('Perfil não encontrado.');
  }
  const updatedProfile = await db.t_Perfil.update({
    where: { id_Perfil: data.id_Perfil },
    data: {
      nome_Perfil: data.nome_Perfil,
      email_Perfil: data.email_Perfil,
      descricao_Perfil: data.descricao_Perfil,
      foto_Perfil: data.foto_Perfil,
      tipo_Perfil: data.tipo_Perfil,
      cursoId: data.tipo_Perfil === 'PESSOAL' ? data.cursoId : undefined,
      semestre_Perfil: data.tipo_Perfil === 'PESSOAL' ? data.semestre_Perfil : undefined,
      updatedAt_Perfil: new Date(),
    },
  });
  if (!updatedProfile) {
    throw new Error('Erro ao atualizar o perfil.');
  }
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
    select: {
      id_Perfil: true,
      nome_Perfil: true,
      email_Perfil: true,
      descricao_Perfil: true,
      foto_Perfil: true,
      tipo_Perfil: true,
      cursoId: true,
      semestre_Perfil: true,
      curso: {
        select: {
          nome_Curso: true,
        },
      },
    },
  });

  if (!getProfile) {
    throw new Error('Perfil não encontrado.');
  }

  return getProfile;
}
export async function getAllProfilesService() {
  const profiles = await db.t_Perfil.findMany({
    where: {},
    select: {
      id_Perfil: true,
      nome_Perfil: true,
      foto_Perfil: true
    },
  });

  if (!profiles) {
    throw new Error('Nenhum perfil encontrado.');
  }

  return profiles;
}