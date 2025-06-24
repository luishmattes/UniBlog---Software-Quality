-- AlterTable
ALTER TABLE "T_Post" ADD COLUMN     "TAG_Post" TEXT;

-- AlterTable
ALTER TABLE "T_PostInteracaoCapa" ALTER COLUMN "visualizacao_PIC" SET DEFAULT ARRAY[0]::INTEGER[];
