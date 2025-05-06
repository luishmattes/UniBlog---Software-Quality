/*
  Warnings:

  - You are about to drop the column `id_Account_Perfil` on the `T_Perfil` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "T_Perfil" DROP CONSTRAINT "T_Perfil_id_Account_Perfil_fkey";

-- AlterTable
ALTER TABLE "T_Perfil" DROP COLUMN "id_Account_Perfil";

-- AddForeignKey
ALTER TABLE "T_Perfil" ADD CONSTRAINT "T_Perfil_id_Perfil_fkey" FOREIGN KEY ("id_Perfil") REFERENCES "T_Account"("id_Account") ON DELETE RESTRICT ON UPDATE CASCADE;
