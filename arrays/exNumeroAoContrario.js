let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

let inicio = 0;
let fim = numeros.length - 1;

while (inicio < fim) {
  let temp = numeros[inicio];
  numeros[inicio] = numeros[fim];
  numeros[fim] = temp;

  inicio++;
  fim--;
}

console.log(numeros);