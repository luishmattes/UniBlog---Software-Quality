import { PrismaClient } from '../src/generated/prisma';


const prisma = new PrismaClient();

async function main() {
    const cursos = [
        { nome_Curso: 'Administração', maxSemestres_Curso: 8 },
        { nome_Curso: 'Direito', maxSemestres_Curso: 10 },
        { nome_Curso: 'Engenharia Civil', maxSemestres_Curso: 10 },
        { nome_Curso: 'Engenharia de Computação', maxSemestres_Curso: 10 },
        { nome_Curso: 'Sistemas de Informação', maxSemestres_Curso: 8 },
        { nome_Curso: 'Ciência da Computação', maxSemestres_Curso: 8 },
        { nome_Curso: 'Medicina', maxSemestres_Curso: 12 },
        { nome_Curso: 'Enfermagem', maxSemestres_Curso: 8 },
        { nome_Curso: 'Psicologia', maxSemestres_Curso: 10 },
        { nome_Curso: 'Arquitetura e Urbanismo', maxSemestres_Curso: 10 },
        { nome_Curso: 'Educação Física', maxSemestres_Curso: 8 },
        { nome_Curso: 'Pedagogia', maxSemestres_Curso: 8 },
        { nome_Curso: 'Contabilidade', maxSemestres_Curso: 8 },
        { nome_Curso: 'Publicidade e Propaganda', maxSemestres_Curso: 8 },
        { nome_Curso: 'Design Gráfico', maxSemestres_Curso: 8 },
    ];

    for (const curso of cursos) {
        await prisma.t_Curso.upsert({
            where: { nome_Curso: curso.nome_Curso },
            update: {},
            create: curso,
        });
    }

    console.log('Seed finalizado com sucesso.');
}

main()
    .finally(async () => {
        await prisma.$disconnect();
    });
