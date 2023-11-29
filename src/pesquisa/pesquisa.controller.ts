import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PesquisaService } from './pesquisa.service';
import { pesquisaDados } from './pesquisa.service';


@Controller("/pesquisa")
export class PesquisaController {

    constructor(private readonly pesquisaService: PesquisaService) {}

    @Post()
    async pesquisarValor(@Body() corpo): Promise<pesquisaDados[] | string>{
        let dados = await this.pesquisaService.pesquisarValor(corpo.produto)
        console.log(corpo.produto)
        return dados
    }

    @Get("/recomendados")
    async retornarValoresCampoRecomendados(){
        let dados = await this.pesquisaService.pesquisarValorCampoRecomendados()
        return dados
    }
}