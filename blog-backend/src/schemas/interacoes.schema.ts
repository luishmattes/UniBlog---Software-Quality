import { z } from 'zod';

export const curtirSchema = z.object({
    id_PIC_Curtida: z.coerce.number().int('ID da interação de capa inválido'),
    id_Perfil_Curtida: z.coerce.number().int('ID do perfil inválido'),
});


export const comentarSchema = z.object({
    id_PIC_Comentario: z.coerce.number().int('ID da interação de capa inválido'),
    id_Perfil_Comentario: z.coerce.number().int('ID do perfil inválido'),
    conteudo_Comentario: z.string().min(1, 'Comentário não pode ser vazio').max(500, 'Comentário muito longo'),
});

export const deletarComentarioSchema = z.object({
    id_PIC_Comentario: z.coerce.number().int('ID do comentário inválido'),
    id_Perfil_Comentario: z.coerce.number().int('ID do perfil inválido'),
}); 