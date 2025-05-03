const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número inteiro > "))

for(let i = 1; i <= 10; i++){

    console.log(`${numero} X ${i} = ${numero * i}`)
}