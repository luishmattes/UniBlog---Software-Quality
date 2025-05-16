import { FastifyInstance } from 'fastify';
import { createPostController, deletePostController, getPostController } from '../controllers/post.controller';
import { verifyJWT } from '../middlewares/auth.middleware';

export async function postRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/', createPostController);
  app.get('/:id_Post', getPostController);
  app.delete('/:id_Post', deletePostController);
}
