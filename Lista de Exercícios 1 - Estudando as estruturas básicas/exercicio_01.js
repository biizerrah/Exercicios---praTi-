const prompt = require('prompt-sync')()

let numero = prompt("Digite um número > ")

if(numero % 2 === 0){
    console.log("NÚMERO PAR")
}else{
    console.log("NÚMERO ÍMPAR")
}