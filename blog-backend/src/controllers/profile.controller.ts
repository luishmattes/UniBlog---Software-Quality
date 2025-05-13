import { FastifyRequest, FastifyReply } from 'fastify';
import { createProfileService, updateProfileService, deleteProfileService, getProfileService } from '../services/profile.service';
import { createProfileSchema, deleteProfileSchema, getProfileSchema, updateProfileSchema } from '../schemas/profile.schema';
interface AuthenticatedRequest extends FastifyRequest {
  user: {
    id_Account: number;
  };
}
export async function createProfileController(request: AuthenticatedRequest, reply: FastifyReply) {
  try {
    const data = createProfileSchema.parse(request.body);
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
};

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
    const data = getProfileSchema.parse(request.body);

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

export async function deleteProfile(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = deleteProfileSchema.parse(request.body);

    const profile = await deleteProfileService(data);

    return reply.status(200).send(profile);
  } catch (error) {
    return reply.status(400).send({ error: 'Erro de validação', details: error });
  }
}
