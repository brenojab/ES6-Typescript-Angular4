import Carro from './Carro'

export default class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: Carro

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

    public comprarCarro(carroParam: Carro): void {
        this.carro = carroParam
    }

    public dizerCarroQueTem(): string {
        return this.carro['modelo'];
    }
}