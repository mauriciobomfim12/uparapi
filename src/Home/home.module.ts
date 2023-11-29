import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma_config/prisma.service';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [HomeService, PrismaService],
})
export class HomeModule {}