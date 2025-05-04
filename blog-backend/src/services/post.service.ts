import { PrismaClient } from '../generated/prisma';
const db = new PrismaClient()


export interface CreatePostDataInterface {
  title_Post?: string;
  content_Post?: string;
  image_Post?: string;
}

export interface UpdatePostDataInterface {
  id_Post: number;
  title_Post?: string;
  content_Post?: string;
  image_Post?: string;
}

export interface DeletePostDataInterface {
  id_Post: number;
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

export async function updatePostService(data: UpdatePostDataInterface) {
  const updatedPost = await db.t_Post.update({
    where: { id_Post: data.id_Post },
    data: {
      content_Post: data.content_Post,
      title_Post: data.title_Post,
      image_Post: data.image_Post,
      updatedAt_Post: new Date(),
    },
  });

  return updatedPost;
}

export async function deletePostService({ id_Post }: DeletePostDataInterface) {
  const deletedPost = await db.t_Post.delete({
    where: { id_Post: id_Post },
  });

  return deletedPost;
}


