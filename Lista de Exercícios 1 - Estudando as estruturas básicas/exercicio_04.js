
const prompt = require('prompt-sync')()

console.log("======================================")
console.log("Digite [1] - para ver 'Olá Mundo!'")
console.log("Digite [2] - para contar até 10")
console.log("Digite [3] - para dizer 'tchau!'")
console.log("======================================")
let opcao = prompt(" > ")

switch(opcao){

    case '1':
        console.log("Olá Mundo!")
        break;
    case '2':
        for(let i = 1; i <=10; i++){
            console.log(i)
        }
        break;
    case '3':
        console.log("Tá na hora de dizer tchau!!")
        break;
    default:
        console.log("Opção Inválida!")
        break;
}