import { FastifyInstance } from 'fastify';
import { createProfileController, deleteProfile, getProfile, updateProfile } from '../controllers/profile.controller';
import { verifyJWT } from '../middlewares/auth.middleware';

export async function userRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/me', createProfileController);
  app.get('/me', getProfile);
  app.put('/me/:id', updateProfile);
  app.delete('/me/:id', deleteProfile);
}
