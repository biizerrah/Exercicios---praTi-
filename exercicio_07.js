const produtos = [
  { nome: "Notebook", preco: 3500.00 },
  { nome: "Smartphone", preco: 1999.99 },
  { nome: "Fone de Ouvido", preco: 199.90 },
  { nome: "Teclado Mecânico", preco: 349.00 },
  { nome: "Mouse Gamer", preco: 129.99 },
  { nome: "Monitor 24''", preco: 899.50 },
  { nome: "Cadeira Gamer", preco: 1099.00 },
  { nome: "Impressora", preco: 599.90 },
  { nome: "HD Externo 1TB", preco: 329.00 },
  { nome: "Pen Drive 64GB", preco: 49.90 },
  { nome: "Webcam Full HD", preco: 259.00 },
  { nome: "Microfone USB", preco: 279.90 },
  { nome: "Tablet", preco: 1399.00 },
  { nome: "Smartwatch", preco: 899.00 },
  { nome: "Caixa de Som Bluetooth", preco: 189.00 }
]

let lista = produtos.sort((a, b) => a.preco - b.preco)

  
  