let numeros = [];

let contador = 0;

for(let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt(`Digite o ${i} número: `));
  numeros[contador] = numero;
  contador++
}

let inicio = 0;
let fim = numeros.length;

while (inicio < fim) {
  let temp = numeros[inicio];
  numeros[inicio] = numeros[fim];
  numeros[fim] = temp;

  inicio++;
  fim--;
}

console.log("Números ao contrário: ");
console.log(numeros);