import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { HomeService } from './home.service';

import { deletarDadosHome, editarDadosHome, inserirDados, pegarDados } from "src/interfaces/interfaces"



@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  

  @Get()
  async pegarDadosHome(): Promise<pegarDados> {
    const dados = await this.homeService.retornarValores();
    return dados
  }

  
  @Post("/imagens")
  async obterProdutoComImagens(@Body() idUsuario) {
    const prodComImagens = this.homeService.obterProdutoComImagens(idUsuario)
    return prodComImagens
  }


  @Post()
  async inserirDadosHome(@Body() corpo): Promise<inserirDados | string> {

    var {promocoes, produto2, produto, banner, banner2, bannerDuplo, catalogo, catalogo2, imagens, comentario} = corpo
    console.log(comentario)
    function dados(){
      var inserido;
      if(promocoes){
        inserido = promocoes
      }
      else if(produto2){
        inserido = produto2
      }
      else if(produto){
        inserido = produto
      }
      else if(promocoes){
        inserido = promocoes
      }
      else if(banner){
        inserido = banner
      }
      else if(banner2){
        inserido = banner2
      }
      else if(bannerDuplo){
        inserido = bannerDuplo
      }
      else if(catalogo){
        inserido = catalogo
      }
      else if(catalogo2){
        inserido = catalogo2
      }
      else if(imagens){
        inserido = imagens
      }
      else if(comentario){
        inserido = comentario
      }
      return inserido
    }
    var resultado = dados()
    return this.homeService.inserirDados(resultado.tabela, resultado?.data, resultado?.data, resultado?.data)
  }

  @Delete()
  async deletarDadosHome(@Body() tabela): Promise<string | deletarDadosHome> {
    const dadoDeletado = this.homeService.deletarDados(tabela.tabela.toString(), tabela.id)
    return dadoDeletado
  }
  
  @Put()
  async editarDadosHome(@Body() infos): Promise<editarDadosHome | string> {
    const dados = await this.homeService.editarDadosHome(infos.tabela, infos.id, infos.data)
    return dados
  }
}