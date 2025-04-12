import { FastifyInstance } from 'fastify';
import { createPost, getUserFeed } from '../controllers/post.controller';
import { verifyJWT } from '../middlewares/auth.middleware';

export async function postRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/', createPost);
  app.get('/feed', getUserFeed);
}
