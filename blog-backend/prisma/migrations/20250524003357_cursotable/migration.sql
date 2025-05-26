-- CreateEnum
CREATE TYPE "PerfilTipo" AS ENUM ('PESSOAL', 'COMUNIDADE');

-- AlterTable
ALTER TABLE "T_Perfil" ADD COLUMN     "cursoId" INTEGER,
ADD COLUMN     "semestre_Perfil" INTEGER,
ADD COLUMN     "tipo_Perfil" "PerfilTipo" NOT NULL DEFAULT 'PESSOAL';

-- CreateTable
CREATE TABLE "T_Curso" (
    "id_Curso" SERIAL NOT NULL,
    "nome_Curso" TEXT NOT NULL,
    "maxSemestres" INTEGER NOT NULL,

    CONSTRAINT "T_Curso_pkey" PRIMARY KEY ("id_Curso")
);

-- CreateIndex
CREATE UNIQUE INDEX "T_Curso_nome_Curso_key" ON "T_Curso"("nome_Curso");

-- AddForeignKey
ALTER TABLE "T_Perfil" ADD CONSTRAINT "T_Perfil_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "T_Curso"("id_Curso") ON DELETE SET NULL ON UPDATE CASCADE;
