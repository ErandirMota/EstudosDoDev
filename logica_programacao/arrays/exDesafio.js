let num = parseInt(prompt("Digite um número: "));
let array = [1, 2, 3, 4, 5, 6, 5, 8, 5, 10];

for (let i = 0; i < array.length; i++) {
  let j = i;
  if (array[j] == num) {
    console.log(`O valor ${num} está na posição ${i}`);
  }
}