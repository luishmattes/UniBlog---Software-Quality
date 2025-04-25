import { FastifyInstance } from 'fastify';
import { registerAccountController, loginAccountController } from '../controllers/account.controller';

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', registerAccountController);
  app.post('/login', loginAccountController);
}
