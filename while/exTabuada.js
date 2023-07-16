let numero = parseInt(prompt("Digite um número: "));
let i = 0;

while (i <= 3) {
  console.log("Tabuada do", numero + i);
  let tabuada = 1;
  while (tabuada <= 10) {
    console.log(numero + i, "x", tabuada, "=", (numero + i) * tabuada);
    tabuada++;
  }
  i++;
}