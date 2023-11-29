import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma_config/prisma.service';
import { PesquisaController } from './pesquisa.controller';
import { PesquisaService } from './pesquisa.service';

@Module({
  imports: [],
  controllers: [PesquisaController],
  providers: [PesquisaService, PrismaService],
})
export class PesquisaModule {}