import { FastifyInstance } from 'fastify';
import { getProfile, updateProfile } from '../controllers/profile.controller';
import { verifyJWT } from '../middlewares/auth.middleware';

export async function userRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.get('/me', getProfile);
  app.put('/me', updateProfile);
}
