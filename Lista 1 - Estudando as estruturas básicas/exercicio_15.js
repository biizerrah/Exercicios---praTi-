
let a = 0;
let b = 1;
let sequencia = [];

for (let i = 0; i < 10; i++) {

  sequencia.push(a);

  let temp = a + b;
  a = b;
  b = temp;
}

console.log(sequencia);
