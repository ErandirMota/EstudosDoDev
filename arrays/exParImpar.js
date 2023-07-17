let array = [];
let arrayPares = [];
let arrayImpares = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Digite um número: "));
  array[i] = numero;
}
console.log(array);

let parOuImpar = 0;
let contador = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    arrayPares[contador] = array[i];
  } else {
    arrayImpares[contador] = array[i];
  }
  contador++;
}

console.log("Quantidade de número Pares: ", arrayPares);
console.log("Quantidade de números Impares: ", arrayImpares);