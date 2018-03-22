// passando o tipo
/*
let ola = (nome: string, sobrenome :string) => {
    console.log("Yeah, " + nome + " " + sobrenome + "!")
}

ola("Breno", "Batista")
*/

/*** Inferência de tipo (é possível tipificar as variáveis) ***/

// Tipos conhecidos
let mensagem: string = "Welcome!"
let temporadasFriends: number = 10
let estudandoAngular: boolean = true

// Formas de declarar arrays
let listaDeFrutas: string[] = ['Uva', 'Banana', 'Abacaxi']
let notasDasProvas: Array<Number> = [7.5, 8, 9]
let notasDasProvas2: Number[] = [7.5, 8, 9]


// Verificação estática

// Suporte a classes e interfaces