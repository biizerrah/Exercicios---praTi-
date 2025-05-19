const prompt = require('prompt-sync')()

let numero
let opcao
let rel = 1

do{
    numero = parseInt(prompt("Digite um número INTEIRO: "))
    if(numero === 0){

        console.log("0! é igual a: 1")

    }else if(numero < 0){

        console.log("Para calcular o fatorial de um número ele DEVE ser POSITIVO!")

    }else{

        for(let i = numero; i >= 1 ; i--){ rel = rel * i }
        console.log(`${numero}! é igual a: ${rel}`)
    }
    
    opcao = prompt("Deseja calcular o fatorial de outro número? [S] ou [N] > ").toLowerCase()

}while(opcao === 's')