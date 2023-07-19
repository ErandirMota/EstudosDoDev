let arrayA = [];
let arrayB = [];
let arrayInterseccao = [];

let continuar = true;
let contador = 0;
while (continuar) {
  let numeroA = parseInt(prompt("Digite um número: "))
  let numeroB = parseInt(prompt("Digite um número: "))
  arrayA[contador] = numeroA;
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

for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayB.length; j++) {
    if (arrayA[i] == arrayB[j] || arrayA[i] % 2 !== 0) {
      arrayInterseccao[j] = arrayA[i];
    }
  }
}

console.log(`Intersecção entre A e B: ${arrayInterseccao}`);
