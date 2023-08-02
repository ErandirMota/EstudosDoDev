let id = [];
let nome = [];
let preco = [];
let avaliacao = [];

function cadastrarProduto() {
  let contador = 0;

  let cadastrarID = parseInt(prompt("Digite o ID do produto:"));
  id[contador] = cadastrarID;

  let cadastrarNome = prompt("Digite o nome do produto: ");
  nome[contador] = cadastrarNome;

  let cadastrarPreco = parseFloat(prompt("Digite o preço do produto: "));
  preco[contador] = cadastrarPreco;

  let cadastrarAvaliacao = parseFloat(prompt("Digite a avaliação do produto: "));
  avaliacao[contador] = cadastrarAvaliacao;

  return { id, nome, preco, avaliacao };
}

const dadosRetornados = cadastrarProduto(); 

function buscarPorID() {
  console.log(dadosRetornados.id);
  console.log(dadosRetornados.nome);
}

cadastrarProduto();
buscarPorID();


