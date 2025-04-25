import { PrismaClient } from '@prisma/client'; 
const db = new PrismaClient(); 

import { createProfileSchema } from '../schemas/profile.schema';

export async function createProfileService(data: { name: string; email: string; bio?: string }) {
  const { name, email, bio } = data;
  const profile = await db.user.create({
    data: {
      name,
      email,
      bio,
    },
    select: { id: true, name: true, email: true, bio: true },
  });
  return profile; 
} 

  
  
  
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
