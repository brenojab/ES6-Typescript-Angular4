class Carro {
    private modelo: string = ''
    private numeroDePortas: number
    private velocidade: number = 0

    /**
     Construtor
     */
    constructor(modeloParam: string, numeroDePortasParam: number) {
        this.modelo = modeloParam;
        this.numeroDePortas = numeroDePortasParam;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {

    }

    public velocidadeAtual(): number {

        return 0;
    }

}

// instanciação
let carroA = new Carro("Aventator", 2);

console.log(carroA);
carroA.acelerar();
console.log(carroA);