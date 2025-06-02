import { FastifyInstance } from 'fastify';
import { curtirController, descurtirController, comentarController, deletarComentarioController } from '../controllers/interacoes.controller';

export async function interacoesRoutes(app: FastifyInstance) {
    app.post('/curtir', curtirController);
    app.delete('/descurtir', descurtirController);
    app.post('/comentar', comentarController);
    app.delete('/deletar-comentario', deletarComentarioController);
}
