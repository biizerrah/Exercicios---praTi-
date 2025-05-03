const prompt = require('prompt-sync')()

let peso = parseFloat(prompt('Digite seu peso: '))
let altura = parseFloat(prompt('Digite a sua altura (em metros): '))
let IMC = peso / (altura ** 2)
IMC = IMC.toFixed(1)

if(IMC < 18.5){
    console.log("Baixo Peso")
}else if(IMC >= 18.5 && IMC < 25){
    console.log("Peso normal")
}else if(IMC >= 25 && IMC < 30){
    console.log("Sobrepeso")
}else if(IMC >= 30 && IMC < 35){
    console.log("Obesidade - Grau I")
}else if(IMC >= 35 && IMC < 40){
    console.log("Obesidade - Grau II")
}else {
    console.log("Obesidade - Grau III")
}



