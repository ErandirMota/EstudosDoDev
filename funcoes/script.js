CalcularMedia(10, 10);

function CalcularMedia(num1, num2) {
  console.log("Calcular a média: ")
  console.log((num1 + num2) / 2);
}

PerguntarNome();

function PerguntarNome() {
  var nome = prompt("Digite um nome: ");
  return nome;
}

console.log(PerguntarNome());