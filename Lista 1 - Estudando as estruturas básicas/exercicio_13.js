const prompt = require('prompt-sync')()
let numero
let lista = []

do {
    numero = parseFloat(prompt("Digite um número decimal > "))

    if(numero !== 0){lista.push(numero)}
    
} while(numero !== 0)

let soma = lista.reduce((acc,item) => { return acc + item })
let media = soma / (lista.length)
media = media.toFixed(1)
console.log(`A média é: ${media}`)