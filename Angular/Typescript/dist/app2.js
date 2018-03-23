"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
// import { Carro, qualquerCoisa as algumaCoisa } from './Carro'
// import Carro, { qualquerCoisa } from './Carro'
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/*********Criar carros */
var carroA = new Carro_1.default('Lamborghini Aventator', 2);
var carroB = new Carro_1.default('Porsche 911 GT3', 2);
var carroC = new Carro_1.default('Honda Fit', 4);
/**Montar lista de carros da concessionária */
// let listaDeCarros : Array<Carro> = [carroA, carroB, carroC]
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Raja Gabáglia', listaDeCarros);
/**exibir lista de carros */
//console.log(concessionaria.mostrarListaDecarros())
/**Comprar carro */
var cliente = new Pessoa_1.default('Sô Zé', 'Porsche 911 GT3');
console.log("O carro preferido do " + cliente.dizerNome() + " é o " + cliente.dizerCarroPreferido());
concessionaria.mostrarListaDecarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        cliente.comprarCarro(carro);
});
console.log(cliente.dizerCarroQueTem());
