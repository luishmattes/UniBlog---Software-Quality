-- CreateTable
CREATE TABLE "T_Account" (
    "id_Account" SERIAL NOT NULL,
    "nome_Account" TEXT NOT NULL,
    "email_Account" TEXT NOT NULL,
    "matricula_Account" TEXT NOT NULL,
    "password_Account" TEXT NOT NULL,
    "createdAt_Account" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt_Account" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "T_Account_pkey" PRIMARY KEY ("id_Account")
);

-- CreateTable
CREATE TABLE "T_Perfil" (
    "id_Perfil" SERIAL NOT NULL,
    "nome_Perfil" TEXT NOT NULL,
    "email_Perfil" TEXT NOT NULL,
    "matricula_Perfil" TEXT NOT NULL,
    "foto_Perfil" TEXT,
    "descricao_Perfil" TEXT,
    "createdAt_Perfil" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt_Perfil" TIMESTAMP(3) NOT NULL,
    "id_Account_Perfil" INTEGER NOT NULL,

    CONSTRAINT "T_Perfil_pkey" PRIMARY KEY ("id_Perfil")
);

-- CreateTable
CREATE TABLE "T_Post" (
    "id_Post" TEXT NOT NULL,
    "title_Post" TEXT,
    "content_Post" TEXT,
    "image_Post" TEXT,
    "createdAt_Post" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt_Post" TIMESTAMP(3) NOT NULL,
    "id_Perfil_Post" INTEGER NOT NULL,

    CONSTRAINT "T_Post_pkey" PRIMARY KEY ("id_Post")
);

-- CreateIndex
CREATE UNIQUE INDEX "T_Account_email_Account_key" ON "T_Account"("email_Account");

-- CreateIndex
CREATE UNIQUE INDEX "T_Account_matricula_Account_key" ON "T_Account"("matricula_Account");

-- CreateIndex
CREATE UNIQUE INDEX "T_Perfil_email_Perfil_key" ON "T_Perfil"("email_Perfil");

-- CreateIndex
CREATE UNIQUE INDEX "T_Perfil_matricula_Perfil_key" ON "T_Perfil"("matricula_Perfil");

-- AddForeignKey
ALTER TABLE "T_Perfil" ADD CONSTRAINT "T_Perfil_id_Account_Perfil_fkey" FOREIGN KEY ("id_Account_Perfil") REFERENCES "T_Account"("id_Account") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "T_Post" ADD CONSTRAINT "T_Post_id_Perfil_Post_fkey" FOREIGN KEY ("id_Perfil_Post") REFERENCES "T_Perfil"("id_Perfil") ON DELETE RESTRICT ON UPDATE CASCADE;
