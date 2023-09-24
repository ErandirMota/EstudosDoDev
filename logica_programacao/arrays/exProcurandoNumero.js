let array = [];
let contador = 0;

for (let i = 1; i <= 5; i++) {
  let numeros = parseInt(prompt(`Digite numero ${i}`));
  array[contador] = numeros;
  contador++;
}

let numero = parseInt(prompt("Digite um número: "));

for (let i = 0; i < array.length; i++) {
  if (array[i] === numero) {
    console.log(i);
  }
}



