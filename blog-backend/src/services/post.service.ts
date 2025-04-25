import { PrismaClient } from '@/generated/prisma'; 
const db = new PrismaClient()

interface PostDataInterface {
  id_Post: number;
  title?: string;
  content: string;
  image?: string;
}

export async function createPostService({ title, image, content }: PostDataInterface) {
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

export async function updatePostService({ title, image, content, id_Post }: PostDataInterface) {
  const Post = await db.t_Post.update({
    where: { id_Post: id_Post },
    data: {
      content_Post: content || '',
      title_Post: title || '',
      image_Post: image || '',
      updatedAt_Post: new Date(),
    },
  });

  return Post;
}

export async function deletePostService({ id_Post }: PostDataInterface) {
  const Post = await db.t_Post.delete({
    where: { id_Post: id_Post },
  });

  return Post;
}


