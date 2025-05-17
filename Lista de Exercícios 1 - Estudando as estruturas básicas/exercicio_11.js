const prompt = require('prompt-sync')()

let numero
let soma = 0

for(let i = 0; i < 5; i++){

    numero = parseInt(prompt('Digite um número: '))
    soma = soma + numero
}

console.log(`A soma dos números é de: ${soma}`)