import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HomeModule } from './Home/home.module';
import { GraphQLModule } from '@nestjs/graphql';
import { HomeResolver } from './serverGraphql/home.resolver';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma_config/prisma.service';
import { PesquisaModule } from './pesquisa/pesquisa.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    HomeModule,
    PesquisaModule,
    ProdutoModule,
  ],
  controllers: [],
  providers: [HomeResolver, PrismaService],
})
export class AppModule {
}

