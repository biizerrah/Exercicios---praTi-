const prompt = require('prompt-sync')()


let numero = prompt("Digite um número inteiro: ")


console.log(`===================================`)
console.log(`Contagem regressiva de ${numero}`)
console.log(`===================================`)

for(let i = numero; i > 0; i--) {console.log(i)}
