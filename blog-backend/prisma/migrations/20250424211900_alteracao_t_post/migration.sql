/*
  Warnings:

  - The primary key for the `T_Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_Perfil_Post` on the `T_Post` table. All the data in the column will be lost.
  - The `id_Post` column on the `T_Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "T_Post" DROP CONSTRAINT "T_Post_id_Perfil_Post_fkey";

-- AlterTable
ALTER TABLE "T_Post" DROP CONSTRAINT "T_Post_pkey",
DROP COLUMN "id_Perfil_Post",
DROP COLUMN "id_Post",
ADD COLUMN     "id_Post" SERIAL NOT NULL,
ADD CONSTRAINT "T_Post_pkey" PRIMARY KEY ("id_Post");

-- AddForeignKey
ALTER TABLE "T_Post" ADD CONSTRAINT "T_Post_id_Post_fkey" FOREIGN KEY ("id_Post") REFERENCES "T_Perfil"("id_Perfil") ON DELETE RESTRICT ON UPDATE CASCADE;
