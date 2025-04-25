export const createAccountSchema = {
  body: {
    type: 'object',
    required: ['nome_Account', 'email_Account', 'matricula_Account', 'password_Account'],
    properties: {
      nome_Account: { type: 'string', maxlength: 100 },
      email_Account: { type: 'string', format: 'email', maxlength: 200 },
      matricula_Account: { type: 'string', maxlength: 20 }, 
      password_Account: { type: 'string', minLength: 6, maxlength: 20 },
    },
    additionalProperties: false, 
  },
};

export const loginAccountSchema = {
  body: {
    type: 'object',
    required: ['email_Account', 'password_Account'],
    properties: {
      email_Account: { type: 'string', format: 'email', maxlength: 200 },
      password_Account: { type: 'string', minLength: 6, maxlength: 20 },
    },
    additionalProperties: false, 
  },
};

export const updateAccountSchema = {
  body: {
    type: 'object',
    properties: {
      nome_Account: { type: 'string', maxlength: 100 },
      email_Account: { type: 'string', format: 'email', maxlength: 100 },
      password_Account: { type: 'string', minLength: 6, maxlength: 50 },
    },
    additionalProperties: false, 
  },
};

