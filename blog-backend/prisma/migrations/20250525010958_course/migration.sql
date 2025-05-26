/*
  Warnings:

  - You are about to drop the column `maxSemestres` on the `T_Curso` table. All the data in the column will be lost.
  - You are about to drop the column `cursoId` on the `T_Perfil` table. All the data in the column will be lost.
  - Added the required column `maxSemestres_Curso` to the `T_Curso` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "T_Perfil" DROP CONSTRAINT "T_Perfil_cursoId_fkey";

-- AlterTable
ALTER TABLE "T_Curso" DROP COLUMN "maxSemestres",
ADD COLUMN     "maxSemestres_Curso" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "T_Perfil" DROP COLUMN "cursoId",
ADD COLUMN     "id_Curso_perfil" INTEGER;

-- AddForeignKey
ALTER TABLE "T_Perfil" ADD CONSTRAINT "T_Perfil_id_Curso_perfil_fkey" FOREIGN KEY ("id_Curso_perfil") REFERENCES "T_Curso"("id_Curso") ON DELETE SET NULL ON UPDATE CASCADE;
