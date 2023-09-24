let array = [];
let contador = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt(`Digite o ${i} número: `));
  array[contador] = numero;
  contador++;
}

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    array[i] = false;
  } else {
    array[i] = true;
  }
}

console.log(array);