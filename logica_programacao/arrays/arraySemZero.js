let array = [1, 2, 0, 5, 4, 0, 9, 6];
let arraySemZeros = [];

let contador = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] !== 0) {
    arraySemZeros[contador] = array[i];
    contador++;
  }
}

console.log(`Array original: ${array}`);
console.log(`Array sem zeros: ${arraySemZeros}`);
