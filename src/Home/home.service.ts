import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma_config/prisma.service';
import { deletarDadosHome, editarDadosHome, pegarDados, inserirDados, imagens, comentario } from "src/interfaces/interfaces"

interface id {
  id: number
}

interface comentOuImagem {
  comentario?: comentario
  imagens?: imagens
}

@Injectable()
export class HomeService {

  constructor(private prisma: PrismaService){}

  async retornarValores(): Promise<pegarDados> {
    const promocoesPromise = this.prisma.promocoes.findMany();
    const bannerPromise = this.prisma.banner.findMany();
    const catalogoPromise = this.prisma.catalogo.findMany();
    const catalogo2Promise = this.prisma.catalogo2.findMany();
    const banner2Promise = this.prisma.banner2.findMany();
    const bannerDuploPromise = this.prisma.bannerDuplo.findMany();
    const produto2Promise = this.prisma.produto2.findMany();
    const produtoPromise = this.prisma.produto.findMany();
  
    const [promocoes, banner, catalogo, catalogo2, banner2, bannerDuplo, produto2, produto] = await Promise.all([
      promocoesPromise,
      bannerPromise,
      catalogoPromise,
      catalogo2Promise,
      banner2Promise,
      bannerDuploPromise,
      produto2Promise,
      produtoPromise,
    ]);
  
    return {
      promocoes,
      banner,
      catalogo,
      catalogo2,
      banner2,
      bannerDuplo,
      produto2,
      produto,
    };
  }
  




  async obterProdutoComImagens(idUsuario: id) {
    console.log(idUsuario)
    try{
      const usuarioComPedidos = await this.prisma.produto.findFirst({
        where: {
          id: idUsuario.id
        },
        include: {
          imagens: true,
          comentaros: true
        },
      });
      return usuarioComPedidos
    }catch(erro){
      return erro.message
    }
  }





  async inserirDados(tabela, data: inserirDados | null, dadosimage: imagens | null, dadoscoment: comentario | null): Promise<inserirDados | string> {
    console.log(tabela, data, dadoscoment, dadosimage)
    try {

      let tabelaPrisma;

      switch (tabela) {
        case 'banner':
          tabelaPrisma = this.prisma.banner;
          break;
        case 'banner2':
          tabelaPrisma = this.prisma.banner2;
          break;
        case 'bannerDuplo':
          tabelaPrisma = this.prisma.bannerDuplo;
          break;
        case 'catalogo':
          tabelaPrisma = this.prisma.catalogo;
          break;
        case 'catalogo2':
          tabelaPrisma = this.prisma.catalogo2;
          break;
        case 'produto':
          tabelaPrisma = this.prisma.produto;
          break;
        case 'produto2':
          tabelaPrisma = this.prisma.produto2;
          break;
        case 'promocoes':
          tabelaPrisma = this.prisma.promocoes;
          break;
        case 'imagens':
          tabelaPrisma = this.prisma.imagens;
          break;
        case 'comentario':
          tabelaPrisma = this.prisma.comentarios;
          break;
        default:
          return "Tabela não encontrada";
      }
  
      if (tabela === 'imagens' && dadosimage?.idProduto) {
        console.log(tabela)
        const dado = await tabelaPrisma.create({
          data: {
            imagem1: dadosimage?.imagem1,
            imagem2: dadosimage?.imagem2,
            imagem3: dadosimage?.imagem3,
            imagem4: dadosimage?.imagem4,
            produto: {
              connect: {
                id: Number(dadosimage?.idProduto),  // Use o campo id do Produto, que é referenciado por idUsuario
              }
            }
          }
        });
        return dado;
      }
      else if (tabela === 'comentario' && dadoscoment?.idProduto) {
        let data = new Date(dadoscoment?.data)

        const dado = await tabelaPrisma.create({
          data: {
            nome: dadoscoment?.nome,
            comentario: dadoscoment?.comentario,
            data: data,
            estrelas: Number(dadoscoment?.estrelas),
            produto: {
              connect: {
                id: Number(dadoscoment?.idProduto),  // Use o campo id do Produto, que é referenciado por idUsuario
              }
            }
          }
        });
        return dado;
      }else {
        // Se não for 'imagens' ou não houver 'idProduto', apenas criar a tabela normalmente
        const dado = await tabelaPrisma.create({ data });
  
        return dado;
      }

    } catch (error) {
      return error.message;
    }
  }




  async deletarDados(tabela, produto): Promise<deletarDadosHome | string> {
    try {
      let dado;
      let tabelaPrisma;

      switch (tabela) {
        case 'banner':
          tabelaPrisma = this.prisma.banner;
          break;
        case 'banner2':
          tabelaPrisma = this.prisma.banner2;
          break;
        case 'bannerDuplo':
          tabelaPrisma = this.prisma.bannerDuplo;
          break;
        case 'catalogo':
          tabelaPrisma = this.prisma.catalogo;
          break;
        case 'catalogo2':
          tabelaPrisma = this.prisma.catalogo2;
          break;
        case 'produto':
          tabelaPrisma = this.prisma.produto;
          break;
        case 'produto2':
          tabelaPrisma = this.prisma.produto2;
          break;
        case 'promocoes':
          tabelaPrisma = this.prisma.promocoes;
          break;
        default:
          return "Tabela não encontrada";
      }
  
      dado = await tabelaPrisma.findUnique({ where: { id: produto } });
      if (!dado) {
        return "Dado não encontrado";
      }
  
      await tabelaPrisma.delete({ where: { id: dado.id } });
      return dado;
    } catch (error) {
      return error.message;
    }
  }
  




  async editarDadosHome(tabela, id, data): Promise<editarDadosHome | string> {
    try {
      let dado;
      let tabelaPrisma;

      console.log(tabela, id, data)

      switch (tabela) {
        case 'banner':
          tabelaPrisma = this.prisma.banner;
          break;
        case 'banner2':
          tabelaPrisma = this.prisma.banner2;
          break;
        case 'bannerDuplo':
          tabelaPrisma = this.prisma.bannerDuplo;
          break;
        case 'catalogo':
          tabelaPrisma = this.prisma.catalogo;
          break;
        case 'catalogo2':
          tabelaPrisma = this.prisma.catalogo2;
          break;
        case 'produto':
          tabelaPrisma = this.prisma.produto;
          break;
        case 'produto2':
          tabelaPrisma = this.prisma.produto2;
          break;
        case 'promocoes':
          tabelaPrisma = this.prisma.promocoes;
          break;
        default:
          return "Tabela não encontrada";
      }
  
      dado = await tabelaPrisma.findUnique({ where: { id } });
      if (!dado) {
        return "Dado não encontrado";
      }
  
      await tabelaPrisma.update({
        where: { id },
        data,
      });
  
      return dado;
    } catch (error) {
      return error.message;
    }
  }
  
  
}