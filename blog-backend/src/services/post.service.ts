import { PrismaClient } from '@prisma/client'; 
const db = new PrismaClient()

export async function createNewPost(userId: string, content: string) {
  const post = await db.post.create({
    data: {
      content,
      authorId: userId,
    },
  });

  return post;
}

export async function getFeed(userId: string) {
  const posts = await db.post.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: 'desc' },
  });

  return posts;
}
