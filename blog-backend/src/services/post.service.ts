import { PrismaClient } from '@/generated/prisma';
const db = new PrismaClient()

export interface CreatePostDataInterface {
  title?: string;
  content: string;
  image?: string;
}

export interface UpdatePostDataInterface {
  id_Post: number;
  title?: string;
  content?: string;
  image?: string;
}

export interface DeletePostDataInterface {
  id_Post: number;
}

export async function createPostService({ title, image, content }: CreatePostDataInterface) {
  const Post = await db.t_Post.create({
    data: {
      title_Post: title,
      content_Post: content,
      image_Post: image,
      createdAt_Post: new Date(),
    },
  });

  return Post;
}

export async function updatePostService({ title, image, content, id_Post }: UpdatePostDataInterface) {
  const Post = await db.t_Post.update({
    where: { id_Post: id_Post },
    data: {
      content_Post: content,
      title_Post: title,
      image_Post: image,
      updatedAt_Post: new Date(),
    },
  });

  return Post;
}

export async function deletePostService({ id_Post }: DeletePostDataInterface) {
  const Post = await db.t_Post.delete({
    where: { id_Post: id_Post },
  });

  return Post;
}


