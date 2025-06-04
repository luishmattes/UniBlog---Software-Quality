import Fastify from 'fastify';
import fastifyMultipart from '@fastify/multipart';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { authRoutes } from './routes/account.routes';
import { userRoutes } from './routes/profile.routes';
import { postRoutes } from '../src/routes/post.routes';
import { interacoesRoutes } from './routes/interacoes.routes';

export const app = Fastify();

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: process.env.JWT_SECRET || 'uniblog-secret',
});
app.register(fastifyMultipart);

// Rotas
app.register(authRoutes, { prefix: '/account' });
app.register(userRoutes, { prefix: '/profile' });
app.register(postRoutes, { prefix: '/posts' });
app.register(interacoesRoutes, { prefix: '/int' });

