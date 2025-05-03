const prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Digite a sua nota > "))

if(nota === 10){
    console.log("PARABÉNS, ALUNO APROVADO COM NOTA MÁXIMA!")
}else if(nota >= 7 && nota < 10){
    console.log("ALUNO APROVADO!")
}else if(nota >= 4 && nota < 7){
console.log("ALUNO EM RECUPERAÇÃO!")
}else{
    console.log("ALUNO REPROVADO!")
}