/*
  Warnings:

  - You are about to drop the column `id_Curso_perfil` on the `T_Perfil` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "T_Perfil" DROP CONSTRAINT "T_Perfil_id_Curso_perfil_fkey";

-- AlterTable
ALTER TABLE "T_Perfil" DROP COLUMN "id_Curso_perfil",
ADD COLUMN     "id_Curso_Perfil" INTEGER;

-- AddForeignKey
ALTER TABLE "T_Perfil" ADD CONSTRAINT "T_Perfil_id_Curso_Perfil_fkey" FOREIGN KEY ("id_Curso_Perfil") REFERENCES "T_Curso"("id_Curso") ON DELETE SET NULL ON UPDATE CASCADE;
