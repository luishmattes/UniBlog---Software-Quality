export const updateUserSchema = {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      bio: { type: 'string' },
    },
    additionalProperties: false,
  },
};
