import { FastifyInstance } from 'fastify';
import { getProfile, updateProfile } from '../controllers/perfil.controller';
import { verifyJWT } from '../middlewares/auth.middleware';

export async function userRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.get('/me', getProfile);
  app.put('/me', updateProfile);
}
