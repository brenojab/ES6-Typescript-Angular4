class Carro {
    private modelo: string = ''
    private numeroDePortas: number
    private velocidade: number = 0

    /**
     Construtor
     */
    constructor(modeloParam: string, numeroDePortasParam: number) {
        this.modelo = modeloParam
        this.numeroDePortas = numeroDePortasParam
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }

}

class Concessionaria {
    private endereco: string
    private listaDeCarros: any

    constructor(enderecoParam: string) {
        this.endereco = enderecoParam
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDecarros(): any {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nomeParam: string, carroPrefParam : string) {
        this.nome = nomeParam
        this.carroPreferido = carroPrefParam
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carroParam : any): void {
        this.carro = carroParam
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}