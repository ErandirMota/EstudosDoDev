let arrayA = [];
let arrayB = [];
let arrayInterseccao = [];

for (let i = 0; i < 5; i++) {
  arrayA[i] = parseInt(prompt("Digite um número no array A: "));
  arrayB[i] = parseInt(prompt("Digite um número no Array B: "));
}

console.log("Array A: ", arrayA);
console.log("Array B: ", arrayB);

for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayB.length; j++) {
    if (arrayA[i] === arrayB[j] && arrayA[i] > 5) {
      arrayInterseccao[j] = arrayA[i];
    }
  }
}

console.log("Intersecção ArrayA e ArrayB: ", arrayInterseccao);
