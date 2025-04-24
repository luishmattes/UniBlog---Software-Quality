import { PrismaClient } from '@/generated/prisma'; 
const db = new PrismaClient()

interface PostDataInterface {
  title?: string;
  content: string;
  image?: string;
  createdAt?: Date;
}

export async function createPostService({ title, image, content }: PostDataInterface) {
  const Post = await db.t_Post.create({
    data: {
      title_Post: title || '',
      content_Post: content,
      image_Post: image || '',
      createdAt_Post: new Date(),
    },
  });

  return Post;
}

export async function updatePostService({ ProfileId, title, image, content }: PostDataInterface) {
  const Post = await db.t_Post.update({
    where: { ProfileId: ProfileId },
    data: {
      content,
      title: title || '',
      image_Post: image || '',
    },
  });

  return Post;
}

