export default class Carro {
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

export let qualquerCoisa: string = 'Teste';