import { PrismaClient } from '../generated/prisma';
const db = new PrismaClient()

export interface CreatePostDataInterface {
  title_Post?: string;
  content_Post?: string;
  image_Post?: string;
  id_Perfil_Post: number;
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

export async function createPostService({ title_Post, image_Post, content_Post, id_Perfil_Post }: CreatePostDataInterface) {
  const createdPost = await db.t_Post.create({
    data: {
      title_Post: title_Post,
      content_Post: content_Post,
      image_Post: image_Post,
      id_Perfil_Post: id_Perfil_Post
    },
  });

  return createdPost;
}

export async function updatePostService({ title_Post, image_Post, content_Post, id_Post }: UpdatePostDataInterface) {
  const updatedPost = await db.t_Post.update({
    where: { id_Post: id_Post },
    data: {
      content_Post: content_Post,
      title_Post: title_Post,
      image_Post: image_Post,
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


