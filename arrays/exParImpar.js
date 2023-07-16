let numeros = [];
let arrayPares = [];
let arrayImpares = [];
let contador = 0;
for (let i = 0; i < 5; i++) {
  numeros[contador] = parseInt(prompt(`Digite o ${i} número: `));
  if (numeros[contador] % 2 == 0) {
    arrayPares[i] = numeros[contador];
  } else {
    arrayImpares[i] = numeros[contador];
  }
  contador++;
}

console.log(numeros[contador]);
console.log(arrayPares[contador]);
console.log(arrayImpares[contador]);
