const prompt = require('prompt-sync')()

let idade = prompt("Digite uma idade > ")

if(idade >= 1 && idade <= 14){
console.log("CRIANÇA")
}else if(idade >= 15 && idade <= 17){
console.log("ADOLESCENTE")
}else if(idade >= 18 && idade <= 60){
    console.log("ADULTO")
}else{
    console.log("IDOSO")
}