import { PrismaClient } from '../generated/prisma';
const db = new PrismaClient()


export interface CreatePostDataInterface {
  title_Post?: string;
  content_Post?: string;
  image_Post?: string;
}
export interface ParamsPostDataInterface {
  id_Post: number;
}
export interface PerfilHeaderDataInterface {
  'id_Perfil': number;
}

export async function createPostService(data: CreatePostDataInterface, id_Perfil_Post: number) {

  const createdPost = await db.t_Post.create({
    data: {
      title_Post: data.title_Post,
      content_Post: data.content_Post,
      image_Post: data.image_Post,
      perfil: {
        connect: { id_Perfil: id_Perfil_Post },
      },
    },
  });

  return createdPost;
}


export async function deletePostService({ id_Post }: ParamsPostDataInterface, id_Perfil_Post: PerfilHeaderDataInterface['id_Perfil']) {
  const post = await db.t_Post.findFirst({
    where: { id_Post: id_Post, perfil: { id_Perfil: id_Perfil_Post } },
  });
  if (!post) {
    throw new Error('Post não encontrado.');
  }

  const deletedPost = await db.t_Post.delete({
    where: { id_Post: id_Post },
  });

  return deletedPost;
}


export async function getPostByProfileService({ id_Perfil }: PerfilHeaderDataInterface) {

  const getPost = await db.t_Post.findMany({
    where: { perfil: { id_Perfil: id_Perfil } },
    select: {
      id_Post: true,
      title_Post: true,
      content_Post: true,
      image_Post: true,
      perfil: {
        select: {
          nome_Perfil: true,
          foto_Perfil: true,
        },
      },
    },
  });

  if (!getPost) {
    throw new Error('Post não encontrado.');
  }

  return getPost;
}

export async function getAllPostsService() {
  const posts = await db.t_Post.findMany({
    orderBy: { createdAt_Post: 'desc' },
    select: {
      id_Post: true,
      title_Post: true,
      content_Post: true,
      image_Post: true,
      createdAt_Post: true,
      perfil: {
        select: {
          id_Perfil: true,
          nome_Perfil: true,
          foto_Perfil: true,
        },
      },
    },
  });

  return posts;
}
