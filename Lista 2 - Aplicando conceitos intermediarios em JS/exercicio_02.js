const prompt = require('prompt-sync')()

let numero
let numRandom = Math.floor(Math.random() * 100)
let tentativas = 0

do {

    numero = Number(prompt("Escreva um número entre 1 e 100 >>>>>> "))

    if(numero > numRandom){
        console.log("O número digitado é maior que o número sorteado.")
    }else if(numero < numRandom){
        console.log("O número digitado é menor que o número sorteado.")
    }else{
        console.log(`Parabéns você acertou o número com ${tentativas} tentativas`)
    }

    tentativas++

} while(numero !== numRandom)