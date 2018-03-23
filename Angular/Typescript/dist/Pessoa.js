"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Pessoa;
