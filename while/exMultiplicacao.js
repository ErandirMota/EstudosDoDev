let contador = 0;
let tabuada = 1;
let numero = parseInt(prompt("Digite um número: "));

while (contador <= 3) {
  console.log("Número de entrada: " + numero);
  console.log("Saída: ");
  contador++;

  while (tabuada <= 10) {
    let multiplicacao = numero * tabuada;
    console.log(numero, "x", tabuada, "=", multiplicacao);
    tabuada++;
  }
  tabuada = 1;
  numero++;
}
