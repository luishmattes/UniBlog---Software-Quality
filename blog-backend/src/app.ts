import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { authRoutes } from '../src/routes/auth.routes';
import { userRoutes } from './routes/perfil.routes';
import { postRoutes } from '../src/routes/post.routes';

export const app = Fastify();

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: process.env.JWT_SECRET || 'uniblog-secret',
});

// Rotas
app.register(authRoutes, { prefix: '/auth' });
app.register(userRoutes, { prefix: '/perfil' });
app.register(postRoutes, { prefix: '/posts' });
