import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService){}

    @Post()
    async pegarProduto(@Body() id){
        console.log(id)
        let produto = await this.produtoService.pegarProduto(id)
        return produto
    }
}
