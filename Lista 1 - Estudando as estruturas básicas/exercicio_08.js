
const prompt = require('prompt-sync')()


let numero1 = Number(prompt("Digite um número inteiro: "))
let numero2 = Number(prompt("Digite outro número inteiro: "))

if(numero1 < numero2){
    console.log(`Número em ordem crescente: ${numero1}, ${numero2}`)
}else if(numero2 < numero1){
    console.log(`Números em ordem crescente: ${numero2}, ${numero1}`)
}else{
    console.log("Os número são iguais")
}