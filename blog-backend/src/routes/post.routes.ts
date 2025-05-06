import { FastifyInstance } from 'fastify';
import { createPostController, updatePostController, deletePostController } from '../controllers/post.controller';
import { verifyJWT } from '../middlewares/auth.middleware';

export async function postRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/', createPostController);
  app.put('/:id', updatePostController);
  app.delete('/:id', deletePostController);
}
