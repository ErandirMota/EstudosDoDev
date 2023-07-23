let continuar = true;
let array = [];
let contador = 0;

function SomarNumeros(num1, num2) {
  return num1 + num2;
}

function SubtrairNumeros(num1, num2) {
  return num1 - num2;
}

function MultiplicarNumeros(num1, num2) {
  return num1 * num2;
}

function DividirNumeros(num1, num2) {
  return num1 / num2;
}

while (continuar) {
  let num1 = parseInt(prompt("Digite o primeiro número: "))
  let num2 = parseInt(prompt("Digite o segundo número: "))

  let escolhaOperação = parseInt(prompt("Digite qual operação deseja realizar: \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão"))

  let resultado;
  switch (escolhaOperação) {
    case 1:
      resultado = SomarNumeros(num1, num2);
      break;
    case 2:
      resultado = SubtrairNumeros(num1, num2);
      break;
    case 3:
      resultado = MultiplicarNumeros(num1, num2);
      break;
    case 4:
      resultado = DividirNumeros(num1, num2);
      break;
    default:
      console.log("[ERRO] Escolha uma opcção correta!");
  }

  array[contador] = resultado;
  contador++;

  let desejaContinuar = prompt("Deseja continuar calculando? (s) sim ou (n) não: ");

  if (desejaContinuar == "n") {
    continuar = false;
  }
}

function exibirArray() {
  console.log(array);
}


