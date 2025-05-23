import { FastifyRequest, FastifyReply } from 'fastify';
import { createProfileService, updateProfileService, deleteProfileService, getProfileService, getAllProfilesService } from '../services/profile.service';
import { createProfileSchema, deleteProfileSchema, updateProfileSchema } from '../schemas/profile.schema';
import { uploadToMinio } from '.././utils/uploadToMinio';

interface AuthenticatedRequest extends FastifyRequest {
  user: {
    id_Account: number;
  };
}
export async function createProfileController(request: AuthenticatedRequest, reply: FastifyReply) {
  try {
    const parts = await request.parts();
    const fields: any = {};
    let foto_Perfil = '';

    for await (const part of parts) {
      if (part.type === 'file') {
        const buffer = await part.toBuffer();
        foto_Perfil = await uploadToMinio(buffer, part.filename);
      } else {
        fields[part.fieldname] = part.value;
      }
    }
    const data = createProfileSchema.parse({
      ...fields,
      foto_Perfil,
    });

    const id_Account_Perfil = request.user.id_Account;

    const profile = await createProfileService(data, id_Account_Perfil);

    return reply.status(201).send(profile);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro de validação',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
    });
  }
}

export async function updateProfileController(request: AuthenticatedRequest, reply: FastifyReply) {
  try {
    const id_Perfil = request.user.id_Account;

    const data = updateProfileSchema.parse(request.body);
    const profile = await updateProfileService({ id_Perfil, ...data });

    return reply.status(200).send(profile);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro ao buscar perfil',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
    });
  }
}

export async function getProfileController(request: AuthenticatedRequest, reply: FastifyReply) {
  try {
    const id_Account_Perfil = request.user.id_Account;

    const profile = await getProfileService(id_Account_Perfil);

    return reply.status(200).send(profile);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro ao buscar perfil',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
    });
  }
}

export async function deleteProfileController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = deleteProfileSchema.parse(request.body);

    const profile = await deleteProfileService(data);

    return reply.status(200).send(profile);
  } catch (error) {
    return reply.status(400).send({ error: 'Erro de validação', details: error });
  }
}
export async function getAllProfilesController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const profiles = await getAllProfilesService();

    return reply.status(200).send(profiles);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro ao buscar perfis',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
    });
  }
}