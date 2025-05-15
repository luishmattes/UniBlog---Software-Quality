import { FastifyInstance } from 'fastify';
import { createPostController, deletePostController } from '../controllers/post.controller';
import { verifyJWT } from '../middlewares/auth.middleware';

export async function postRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/', createPostController);
  //app.get('/:postId', getPostController);
  app.delete('/:id', deletePostController);
}
