import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma_config/prisma.service';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';

@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [ProdutoService, PrismaService]
})
export class ProdutoModule {}
