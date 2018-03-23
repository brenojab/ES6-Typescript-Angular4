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
    function Concessionaria(enderecoParam) {
        this.endereco = enderecoParam;
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
        return this.carro;
    };
    return Pessoa;
}());
