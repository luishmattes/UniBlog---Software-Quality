import { db } from '../prisma/client'; 


export async function getUserProfile(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, bio: true },
  });

  return user;
}

export async function updateUserProfile(userId: string, data: { name?: string; bio?: string }) {
  const updated = await db.user.update({
    where: { id: userId },
    data,
    select: { id: true, name: true, bio: true },
  });

  return updated;
}
