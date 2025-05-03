const prompt = require('prompt-sync')()



let maca = Number(prompt("Quantas maçãs deseja levar? "))

let preco = maca >= 12 ? 0.25 : 0.30
let total = maca * preco

console.log('====================================')
console.log(`O total da sua compra é: ${total.toFixed(2)}`)
console.log('====================================')