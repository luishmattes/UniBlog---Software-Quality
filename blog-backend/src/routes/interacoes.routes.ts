import { FastifyInstance } from 'fastify';
import { curtirController, descurtirController, comentarController, deletarComentarioController } from '../controllers/interacoes.controller';

export async function interacoesRoutes(app: FastifyInstance) {
    app.post('/', curtirController);
    app.delete('/', descurtirController);
    app.post('/comentario', comentarController);
    app.delete('/comentario', deletarComentarioController);
}
