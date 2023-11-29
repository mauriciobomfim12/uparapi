import { DateTime } from "@elastic/elasticsearch/lib/api/types"

export interface promocoes {
    nome: string
}

export interface banner {
    image: string
}

export interface catalogo {
    imagem: string
    nome: string
}

export interface produto {
    desconto: string
    nome: string
    avaliacoes: string
    estrelasQuantidade: number
    sobre: string
    preco: number
    formaDePagamento: string
    tipo: string
}

export interface catalogo2 {
    imagem: string
    nome: string
}

export interface banner2 {
    imagem: string
}

export interface bannerDuplo {
    imagem1: string
    imagem2: string
}

export interface produto2 {
    desconto: string
    nome: string
    avaliacoes: string
    estrelasQuantidade: number
    preco: number
    formaDePagamento: string
    tipo: string
}

export interface imagens {
    imagem1: string 
    imagem2?: string 
    imagem3?: string 
    imagem4?: string 
    idProduto: string 
}

export interface comentario {
    nome: string
    comentario: string
    data: DateTime
    estrelas: number
    idProduto: number
}

export interface pegarDados {
    banner?: banner[]
    banner2?: banner2[]
    bannerDuplo?: bannerDuplo[]
    catalogo?: catalogo[]
    catalogo2?: catalogo2[]
    produto?: produto[]
    produto2?: produto2[]
    promocoes?: promocoes[]
  }
  
export interface inserirDados {
    banner?: banner
    banner2?: banner2
    bannerDuplo?: bannerDuplo
    catalogo?: catalogo
    catalogo2?: catalogo2
    produto?: produto
    produto2?: produto2
    promocoes?: promocoes
    imagens?: imagens
    comentario?: comentario
}
  
export interface deletarDadosHome {
    banner?: banner
    banner2?: banner2
    bannerDuplo?: bannerDuplo
    catalogo?: catalogo
    catalogo2?: catalogo2
    produto?: produto
    produto2?: produto2
    promocoes?: promocoes
}

export interface editarDadosHome {
    banner?: banner
    banner2?: banner2
    bannerDuplo?: bannerDuplo
    catalogo?: catalogo
    catalogo2?: catalogo2
    produto?: produto
    produto2?: produto2
    promocoes?: promocoes
}

export interface tabela {
    banner?: "banner"
    banner2?: "banner2"
    bannerDuplo?: "bannerDuplo"
    catalogo?: "catalogo"
    catalogo2?: "catalogo2"
    produto?: "produto"
    produto2?: "produto2"
    promocoes?: "promocoes"
    imagens?: "imagens"
    comentario?: "comentario"
}

export interface produtoDeletar {
    id: number
}