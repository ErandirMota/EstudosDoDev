let projetos = [];
let orcamentos = [];
let contador = 0;

// Função para criar um novo projeto
function criarProjeto() {
  let nome = prompt("Digite o nome do projeto: ");
  let orcamentoTotal = parseFloat("Digite o orçamento total do projeto: ");

  projetos[contador] = nome;
  orcamentos[contador] = orcamentoTotal;

  console.log("Projeto criado com sucesso!");
}

// Função para adicionar receita ou despesa no projeto
function receberDados(nome, valor, tipoDespesa) {
  for (let i = 0; i < projetos.length; i++) {
    if (nome === projetos[i]) {
      if (tipoDespesa === "R") {
        orcamentos[i] += valor;
      } else if (tipoDespesa === "D" && valor > orcamentos[i]) {
        console.log("O saldo disponível é insuficiente para retirada!");
      } else {
        orcamentos[i] -= valor;
      }
      console.log(`O saldo atual é de: R$ ${orcamentos[i]}`);
    }
  }
}