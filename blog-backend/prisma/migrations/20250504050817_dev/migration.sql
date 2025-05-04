/*
  Warnings:

  - You are about to drop the column `matricula_Perfil` on the `T_Perfil` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "T_Perfil_matricula_Perfil_key";

-- AlterTable
ALTER TABLE "T_Perfil" DROP COLUMN "matricula_Perfil";
