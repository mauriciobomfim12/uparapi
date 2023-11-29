-- CreateTable
CREATE TABLE `Promocoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Banner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Catalogo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagem` TEXT NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` TEXT NOT NULL,
    `desconto` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `avaliacoes` VARCHAR(191) NOT NULL,
    `estrelasQuantidade` INTEGER NOT NULL,
    `preco` INTEGER NOT NULL,
    `formaDePagamento` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `sobre` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentarios` (
    `idComentario` INTEGER NOT NULL AUTO_INCREMENT,
    `idProduto` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `comentario` TEXT NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `estrelas` INTEGER NOT NULL,

    PRIMARY KEY (`idComentario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Imagens` (
    `idImagem` INTEGER NOT NULL AUTO_INCREMENT,
    `idProduto` INTEGER NOT NULL,
    `imagem1` TEXT NOT NULL,
    `imagem2` TEXT NULL,
    `imagem3` TEXT NULL,
    `imagem4` TEXT NULL,

    PRIMARY KEY (`idImagem`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagem` TEXT NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banner2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagem` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bannerDuplo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagem1` TEXT NOT NULL,
    `imagem2` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` TEXT NOT NULL,
    `desconto` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `avaliacoes` VARCHAR(191) NOT NULL,
    `estrelasQuantidade` INTEGER NOT NULL,
    `preco` INTEGER NOT NULL,
    `formaDePagamento` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DadosCampoPesquisa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produto` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `tempo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Imagens` ADD CONSTRAINT `Imagens_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
