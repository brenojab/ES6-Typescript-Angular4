// import { Carro, qualquerCoisa as algumaCoisa } from './Carro'
// import Carro, { qualquerCoisa } from './Carro'
import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/*********Criar carros */
let carroA = new Carro('Lamborghini Aventator', 2);
let carroB = new Carro('Porsche 911 GT3', 2);
let carroC = new Carro('Honda Fit', 4);

/**Montar lista de carros da concessionária */
// let listaDeCarros : Array<Carro> = [carroA, carroB, carroC]
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Raja Gabáglia', listaDeCarros)

/**exibir lista de carros */

//console.log(concessionaria.mostrarListaDecarros())

/**Comprar carro */
let cliente = new Pessoa('Sô Zé', 'Porsche 911 GT3')
console.log("O carro preferido do " + cliente.dizerNome() + " é o " + cliente.dizerCarroPreferido())

concessionaria.mostrarListaDecarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        cliente.comprarCarro(carro);
})

console.log(cliente.dizerCarroQueTem())