// Variável para guardar os projetos e saldos
let projetos = [];
let orcamentos = [];
let contador = 0;

// Função que cria um novo projeto
function criarProjeto() {
  let nomeProjeto = prompt("Digite o nome do projeto: ");
  let orcamentoTotal = parseFloat(prompt("Digite o orçamento total do projeto: "));

  projetos[contador] = nomeProjeto;
  orcamentos[contador] = orcamentoTotal;

  console.log("Projeto foi criado com sucesso!");
}

// Função que adiciona Receita ou Despesa
function adicionarReceitaOuDespesa(nomeProjeto, valor, tipoDespesa) {
  for (let i = 0; i < projetos.length; i++) {
    if (nomeProjeto === projetos[i]) {
      if (tipoDespesa === "R") {
        orcamentos[i] += valor;
      } else if (tipoDespesa === "D" && valor > orcamentos[i]) {
        console.log("O valor da despesa é maior que o saldo disponível!");
      } else {
        orcamentos[i] -= valor;
      }
      console.log(`O saldo atual é de: R$ ${orcamentos[i]}`);
    }
  }
}