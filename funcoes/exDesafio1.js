let historico = [];

function somarNumeros(a, b) {
  return a + b;
}

function subtrairNumeros(a, b) {
 return a - b;
}

function multiplicarNumeros(a, b) {
 return a * b;
}

function dividirNumeros(a, b) {
 return a / b;
}

let contador = 0;
let continuar = true;
while (continuar) {
  let a = parseInt(prompt("Digite um número: "));
  let b = parseInt(prompt("Digite outro número: "));

  let opcao = parseInt(prompt("\n1 - Somar \n2 - Subtrair \n3 - Multiplicar \n4 - Dividir"));

  let resultadoOperacao;
  switch(opcao) {
    case 1:
      resultadoOperacao = somarNumeros(a, b);
      break;
    case 2:
      resultadoOperacao = subtrairNumeros(a, b);
      break;
    case 3:
      resultadoOperacao = multiplicarNumeros(a, b);
      break;
    case 4:
      resultadoOperacao = dividirNumeros(a, b);
      break;
    default:
      console.log('Opção inválida!');
      break;
  }

  historico[contador] = resultadoOperacao;
  contador++;

  console.log("O resultado da operação é: ", resultadoOperacao);
  let desejaContinuar = prompt("Deseja continuar calculando? (s) Sim ou (n) Não: ");

  function exibirHistorico() {
    console.log("Histórico de resultados: ");

    for (let i = 0; i < historico.length; i++) {
      console.log(`Resultado ${i}: ${historico[i]}`);
    }
  }

  if (desejaContinuar == "n") {
    continuar = false;
  }
}

exibirHistorico();
