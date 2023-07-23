let nome;
let salario;

function perguntarDados() {
  nome = prompt("Digite o nome do colaborador");
  salario = parseFloat(prompt("Digite o salário do colaborador: "));
  return calcularAumento(nome, salario);
}

let aumento = 0;
function calcularAumento(nome, salario) {
  if (salario <= 1500) {
    aumento = salario * 1.20;
  } else if (salario <= 2000) {
    aumento = salario * 1.15;
  } else if (salario <= 3000) {
    aumento = salario * 1.10;
  } else {
    aumento = salario * 0.5;
  }

  console.log(aumento);
}
perguntarDados()
calcularAumento()


