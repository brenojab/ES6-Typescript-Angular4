"use strict";
var Carro = /** @class */ (function () {
    /**
     Construtor
     */
    function Carro(modeloParam, numeroDePortasParam) {
        this.modelo = '';
        this.velocidade = 0;
        this.modelo = modeloParam;
        this.numeroDePortas = numeroDePortasParam;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(enderecoParam, listaDeCarrosParam) {
        this.endereco = enderecoParam;
        this.listaDeCarros = listaDeCarrosParam;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDecarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nomeParam, carroPrefParam) {
        this.nome = nomeParam;
        this.carroPreferido = carroPrefParam;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carroParam) {
        this.carro = carroParam;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro['modelo'];
    };
    return Pessoa;
}());
/*********Criar carros */
var carroA = new Carro('Lamborghini Aventator', 2);
var carroB = new Carro('Porsche 911 GT3', 2);
var carroC = new Carro('Honda Fit', 4);
/**Montar lista de carros da concessionária */
// let listaDeCarros : Array<Carro> = [carroA, carroB, carroC]
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Raja Gabáglia', listaDeCarros);
/**exibir lista de carros */
//console.log(concessionaria.mostrarListaDecarros())
/**Comprar carro */
var cliente = new Pessoa('Sô Zé', 'Porsche 911 GT3');
console.log("O carro preferido do " + cliente.dizerNome() + " é o " + cliente.dizerCarroPreferido());
concessionaria.mostrarListaDecarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        cliente.comprarCarro(carro);
});
console.log(cliente.dizerCarroQueTem());
