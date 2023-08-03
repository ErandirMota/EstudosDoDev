let ids = [];
let nomes = [];
let precos = [];
let avaliacoes = [];
let contador = 0;

function cadastrarProduto() {
  let id = contador + 1;
  let nome = prompt("Digite o nome do produto: ");
  let preco = parseFloat(prompt("Digite o preço do produto: "));
  let avaliacao = parseInt(prompt("Digite a avaliação do produto: "));

  ids[contador] = id;
  nomes[contador] = nome;
  precos[contador] = preco;
  avaliacoes[contador] = avaliacao;
  contador++;

  console.log("Produto cadastrado com sucesso!");
}

// Função para buscar produto pelo ID
function buscarPorID(id) {
  for (let i = 0; i < ids.length; i++) {
    if (id == ids[i]) {
      console.log(`id: ${ids[i]}`);
      console.log(`nome: ${nomes[i]}`);
      console.log(`preço: R$ ${precos[i]}`);
      console.log(`avaliação: ${avaliacoes[i]}`);
    }
  }
}

// Função para buscar produto pelo nome e retornar o ID
function buscarPorNome(nome) {
  for (let i = 0; i < nomes.length; i++) {
    if (nome = nomes[i]) {
      return ids[i];
    }
  }
}
