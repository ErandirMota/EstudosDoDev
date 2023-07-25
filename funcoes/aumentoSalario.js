function perguntarDados() {
  let nome = prompt("Digite o nome do colaborador: ");
  let salario = parseFloat(prompt("Digite o salário do colaborador: "));
  calcularAumento(nome, salario);
}

function calcularAumento(nome, salario) {
  let aumento = 0;

  if (salario <= 1500) {
    aumento = 0.2;
  } else if (salario <= 2000) {
    aumento = 0.15;
  } else if (salario <= 3000) {
    aumento = 0.1;
  } else {
    aumento = 0.05;
  }

  let novoSalario = salario + (salario * aumento);

  // Exibir resultados
  console.log(`Nome do colaborador: ${nome}`);
  console.log(`Salário R$ ${salario}`);
  console.log(`Aumento: ${aumento * 100}%`);
  console.log(`Salário reajustado: R$ ${novoSalario}`);

  perguntarNovamente(); // Perguntar se deseja calcular de novo
}

// Função que pergunta ao usuário se ele deseja calcular novamente
function perguntarNovamente() {
  let resposta = prompt("Deseja calcular novamente? (s) Sim ou (n) Não: ");

  if (resposta == "s") {
    perguntarDados(); // Volta o processo
  } else {
    console.log("Programa encerrado!");
  }
}

// Inicio do programa
perguntarDados();



