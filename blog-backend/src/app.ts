import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { authRoutes } from './routes/account.routes';
import { userRoutes } from './routes/profile.routes';
import { postRoutes } from '../src/routes/post.routes';

export const app = Fastify();

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: process.env.JWT_SECRET || 'uniblog-secret',
});

// Rotas
app.register(authRoutes, { prefix: '/account' });
app.register(userRoutes, { prefix: '/profile' });
app.register(postRoutes, { prefix: '/posts' });
