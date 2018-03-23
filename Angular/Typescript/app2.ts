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

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nomeParam: string, carroPrefParam: string) {
        this.nome = nomeParam
        this.carroPreferido = carroPrefParam
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carroParam: any): void {
        this.carro = carroParam
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}

/*********Criar carros */
let carroA = new Carro('Lamborghini Aventator', 2);
let carroB = new Carro('Porsche 911 GT3', 2);
let carroC = new Carro('Honda Fit', 4);

/**Montar lista de carros da concessionária */
// let listaDeCarros : Array<Carro> = [carroA, carroB, carroC]
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Raja Gabáglia', listaDeCarros)

/**exibir lista de carros */

console.log(concessionaria.mostrarListaDecarros())