const prompt = require('prompt-sync')()
let lado1 = Number(prompt('Digite o valor do lado 1 '))
let lado2 = Number(prompt('Digite o valor do lado 2 '))
let lado3 = Number(prompt('Digite o valor do lado 3 '))

let triangulo = (lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)

if(triangulo){
    if(lado1 === lado2 && lado2 === lado3){
        console.log("TRIÂNGULO EQUILÁTERO.")
    }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log("TRIÂNGULO ISÓSCELES.")
    }else{
        console.log("TRIÂNGULO ESCALENO.")
    }
}else{
    console.log("NÃO É UM TRIÂNGULO")
}
