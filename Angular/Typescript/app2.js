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
    function Concessionaria() {
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDecarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var concessionaria = new Concessionaria();
console.log(concessionaria);
