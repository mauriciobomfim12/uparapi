import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma_config/prisma.service';

export interface pesquisaDados {
    id: number
    url: string
    desconto: string
    nome: string
    avaliacoes: string
    estrelasQuantidade: number
    preco: number
    formaDePagamento: string
    tipo: string
}

@Injectable()
export class PesquisaService {

    constructor(private prisma: PrismaService){}


    async pesquisarValor(pesquisa: string): Promise<pesquisaDados[] | string>{
        try{

            //pesquisar valores no banco de dados
            const result = await this.prisma.produto.findMany({
                where: {
                  nome: pesquisa
                },
              });

            //Adicionar ou criar valores recomendados
            if (result){

                const cadastroExiste = await this.prisma.dadosCampoPesquisa.findFirst({
                    where: {
                        produto: pesquisa,
                    },
                });

                if(cadastroExiste){

                    let data = {
                        quantidade: cadastroExiste.quantidade+1,
                    }
                    await this.prisma.dadosCampoPesquisa.update({
                        where: {
                            id: cadastroExiste.id
                        },
                        data
                    })
                }else{
                    await this.prisma.dadosCampoPesquisa.create({
                        data: {
                            produto: pesquisa,
                            quantidade: 1,
                            tempo: 5
                        }
                    })
                }
            }

            //retornar os valores encontrados no banco caso exista
            return result
        }
        catch(erro){
            return erro.message
        }
    }

    async pesquisarValorCampoRecomendados(){
        let valoresRecomendados = await this.prisma.dadosCampoPesquisa.findMany({
            take: 5,
            orderBy: {
                quantidade: "desc"
            }
        })

        return valoresRecomendados
    }
}
