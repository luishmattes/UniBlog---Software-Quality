export const createPostSchema = {
  body: {
    type: 'object',
    required: [' content_Post'],
    properties: {
      title_Post: { type: 'string', maxLength: 100 },
      content_Post: { type: 'string', minLength: 1, maxLength: 1000 },
      image_Post: { type: 'string' },
      id_Perfil_Post: { type: 'string' },
    },
  },
};

export const updatePostSchema = {
  body: {
    type: 'object',
    properties: {
      id_Post: { type: 'string', format: 'uuid' },
      title_Post: { type: 'string', maxLength: 100, optional: true },
      content_Post: { type: 'string', minLength: 1, maxLength: 1000, optional: true },
      image_Post: { type: 'string', optional: true },
    },
    additionalProperties: false,
  },
};

export const deletePostSchema = {
  body: {
    type: 'object',
    required: ['id_Post'],
    properties: {
      id_Post: { type: 'string', format: 'uuid' },
    },
  },
};