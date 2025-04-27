import { FastifyRequest, FastifyReply } from 'fastify';
import { createProfileService, updateProfileService, deleteProfileService, getProfileService } from '../services/profile.service';
import { createProfileSchema, deleteProfileSchema, getProfileSchema, updateProfileSchema } from '../schemas/profile.schema';

export async function createProfileController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = createProfileSchema.parse(request.body);

    const profile = await createProfileService(data);

    return reply.status(201).send(profile);
  } catch (error) {
    return reply.status(400).send({ error: 'Erro de validação', details: error });
  }
};

export async function updateProfile(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id_Perfil } = request.params as { id_Perfil: number };
    const data = updateProfileSchema.parse(request.body);

    const profile = await updateProfileService({ id_Perfil, ...data });

    return reply.status(200).send(profile);
  } catch (error) {
    return reply.status(400).send({ error: 'Erro de validação', details: error });
  }

}

export async function getProfile(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id_Perfil } = request.params as { id_Perfil: number };
    const data = getProfileSchema.parse(request.body);

    const profile = await getProfileService({ id_Perfil, ...data });

    return reply.status(200).send(profile);
  } catch (error) {
    return reply.status(400).send({ error: 'Erro de validação', details: error });
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
