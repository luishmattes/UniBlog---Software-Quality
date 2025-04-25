import { optional } from "zod";

export const createProfileSchema = {
  body: {
    type: 'object',
    required: ['nome_Perfil', 'email_Perfil', 'matricula_Perfil'],
    properties: {
      nome_Perfil: { type: 'string', maxLength: 100 },
      matricula_Perfil: { type: 'string', maxLength: 20 },
      email_Perfil: { type: 'string', format: 'email', maxLength: 100 },
      foto_Perfil: { type: 'string', optional: true },
      descricao_Perfil: { type: 'string', maxLength: 255, optional: true },
    },
    additionalProperties: false,
  },
};

export const updateProfileSchema = {
  body: {
    type: 'object',
    required: ['nome_Perfil, email_Perfil, , foto_Perfil, descricao_Perfil'],
    properties: {
      nome_Perfil: { type: 'string', maxlenght: 100, optional: true }, 
      email_Perfil: { type: 'string', format: 'email', maxLength: 100, optional: true },
      foto_Perfil: { type:'string', optional: true },
      descricao_Perfil: { type: 'string', maxlength: 255, optional: true },
    },
    additionalProperties: false,
  },
};

export const readProfileSchema ={
  body: {
    type: 'object',
    required: ['nome_Perfil', 'email_Perfil', 'matricula_Perfil', 'foto_Perfil', 'descricao_Perfil', 'matriculaAccount_Perfil'],
    properties: {
      nome_Perfil: { type: 'string', maxLength: 100 },
      matricula_Perfil: { type: 'string', maxLength: 20 },
      email_Perfil: { type: 'string', format: 'email', maxLength: 100 },
      foto_Perfil: { type: 'string' },
      descricao_Perfil: { type: 'string', maxLength: 255 },
    },
    additionalProperties: false,
  },
};
