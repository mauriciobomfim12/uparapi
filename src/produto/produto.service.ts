import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma_config/prisma.service';

interface id {
    id: number | string
}

@Injectable()
export class ProdutoService {
    constructor(private readonly prisma: PrismaService){}

    async pegarProduto(id: id){
        let idNumerico = Number(id.id)
        let produto = await this.prisma.produto.findFirst({
            where: {
                id: idNumerico
            }
        })

        return produto
    }
}
