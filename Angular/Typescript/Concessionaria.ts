import Carro from './Carro'

export default class Concessionaria {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(enderecoParam: string, listaDeCarrosParam: Carro[]) {
        this.endereco = enderecoParam
        this.listaDeCarros = listaDeCarrosParam
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDecarros(): Carro[] {
        return this.listaDeCarros
    }
}