-- CreateTable
CREATE TABLE "T_PostInteracaoCapa" (
    "id_PIC" SERIAL NOT NULL,
    "id_Post_PIC" INTEGER NOT NULL,
    "visualizacao_PIC" INTEGER[],

    CONSTRAINT "T_PostInteracaoCapa_pkey" PRIMARY KEY ("id_PIC")
);

-- CreateTable
CREATE TABLE "T_PIC_Curtidas" (
    "id_Curtida" SERIAL NOT NULL,
    "id_Perfil_Curtida" INTEGER NOT NULL,
    "id_PIC_Curtida" INTEGER,

    CONSTRAINT "T_PIC_Curtidas_pkey" PRIMARY KEY ("id_Curtida")
);

-- CreateTable
CREATE TABLE "T_PIC_Comentarios" (
    "id_Comentario" SERIAL NOT NULL,
    "id_Perfil_Comentario" INTEGER NOT NULL,
    "conteudo_Comentario" TEXT NOT NULL,
    "id_PIC_Comentario" INTEGER,

    CONSTRAINT "T_PIC_Comentarios_pkey" PRIMARY KEY ("id_Comentario")
);

-- AddForeignKey
ALTER TABLE "T_PostInteracaoCapa" ADD CONSTRAINT "T_PostInteracaoCapa_id_Post_PIC_fkey" FOREIGN KEY ("id_Post_PIC") REFERENCES "T_Post"("id_Post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "T_PIC_Curtidas" ADD CONSTRAINT "T_PIC_Curtidas_id_PIC_Curtida_fkey" FOREIGN KEY ("id_PIC_Curtida") REFERENCES "T_PostInteracaoCapa"("id_PIC") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "T_PIC_Curtidas" ADD CONSTRAINT "T_PIC_Curtidas_id_Perfil_Curtida_fkey" FOREIGN KEY ("id_Perfil_Curtida") REFERENCES "T_Perfil"("id_Perfil") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "T_PIC_Comentarios" ADD CONSTRAINT "T_PIC_Comentarios_id_PIC_Comentario_fkey" FOREIGN KEY ("id_PIC_Comentario") REFERENCES "T_PostInteracaoCapa"("id_PIC") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "T_PIC_Comentarios" ADD CONSTRAINT "T_PIC_Comentarios_id_Perfil_Comentario_fkey" FOREIGN KEY ("id_Perfil_Comentario") REFERENCES "T_Perfil"("id_Perfil") ON DELETE RESTRICT ON UPDATE CASCADE;
