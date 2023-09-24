// Armazenar os dados
let salarios = [];
let numeroFilhos = [];

// Função para calcular a média salário
function calcularSalario() {
  let somaSalarios = 0;

  for (let i = 0; i < salarios.length; i++) {
    somaSalarios += salarios[i];
  }

  return somaSalarios / salarios.length;
}

// Função para calcular média do numero de filhos
function calcularFilhos() {
  let somaFilhos = 0;

  for (let i = 0; i < numeroFilhos.length; i++) {
    somaFilhos += numeroFilhos[i];
  }

  return somaFilhos / numeroFilhos.length;
}

// Função para encontrar o maior salário
function encontrarMaiorSalario() {
  let maiorSalario = salarios[0];

  for (let i = 0; i < salarios.length; i++) {
    if (salario[i] > maiorSalario) {
      maiorSalario = salarios[i];
    }
  }
  return maiorSalario;
}

// Função que calcula porcentagem das pessoas com salário até 1500
function calcularPorcentagemSalarios() {
  let contSalarios1500 = 0;

  for (let i = 0; i < salarios.length; i++) {
    if (salarios[i] <= 1500) {
      contSalarios1500++;
    }
  }
  return ((contSalarios1500 / salarios.length) * 100 + "%"); 
}