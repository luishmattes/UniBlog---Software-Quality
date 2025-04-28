/*
  Warnings:

  - Added the required column `id_Account_Perfil` to the `T_Perfil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_Perfil_Post` to the `T_Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "T_Perfil" DROP CONSTRAINT "T_Perfil_id_Perfil_fkey";

-- DropForeignKey
ALTER TABLE "T_Post" DROP CONSTRAINT "T_Post_id_Post_fkey";

-- AlterTable
ALTER TABLE "T_Perfil" ADD COLUMN     "id_Account_Perfil" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "T_Post" ADD COLUMN     "id_Perfil_Post" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "T_Perfil" ADD CONSTRAINT "T_Perfil_id_Account_Perfil_fkey" FOREIGN KEY ("id_Account_Perfil") REFERENCES "T_Account"("id_Account") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "T_Post" ADD CONSTRAINT "T_Post_id_Perfil_Post_fkey" FOREIGN KEY ("id_Perfil_Post") REFERENCES "T_Perfil"("id_Perfil") ON DELETE RESTRICT ON UPDATE CASCADE;
