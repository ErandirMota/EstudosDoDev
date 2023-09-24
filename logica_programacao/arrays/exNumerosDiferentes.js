let arrayA = [];
let arrayB = [];
let arrayInterseccao = [];

// Preenchendo os arrays
let continuar = true;
let contador = 0;
while (continuar) {
  let numeroA = parseInt(prompt("Digite um número: "))
  arrayA[contador] = numeroA;
  let numeroB = parseInt(prompt("Digite um número: "))
  arrayB[contador] = numeroB;
  contador++;
  let desejaContinuar = parseInt(
    prompt("Deseja continuar adicionando números: (1) sim ou (2) não")
  );
  if (desejaContinuar === 2) {
    continuar = false;
  }
}

console.log(`Array A: ${arrayA}`);
console.log(`Array B: ${arrayB}`);

// Criando a intersecção entre números do A e B ou ímpares
let cont = 0;
for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayA.length; j++) {
    if (arrayA[i] == arrayB[j] || arrayB[i] % 2 != 0) {
      arrayInterseccao[cont] = arrayB[i];
      cont++
      j = arrayA.length;
    } else if (arrayA[j] % 2 != 0) {
      arrayInterseccao[cont] = arrayA[j];
      cont++;
      j = arrayA.length;
    }
  }
}

console.log(`Intersecção entre A e B: ${arrayInterseccao}`);
