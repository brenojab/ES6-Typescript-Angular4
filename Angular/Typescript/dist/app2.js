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
    };
    Carro.prototype.velocidadeAtual = function () {
        return 0;
    };
    return Carro;
}());
// instanciação
var carroA = new Carro("Aventator", 2);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
