"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Carro;
exports.qualquerCoisa = 'Teste';