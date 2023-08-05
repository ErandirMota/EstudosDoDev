let ids = []
let nomes = []
let precos = []
let avaliacoes = []
let contador = 0

function cadastrarProduto() {
  let id = contador + 1
  let nome = prompt("Digite o nome do produto: ")
  let preco = parseFloat(prompt("Digite o preço do produto: "))
  let avaliacao = parseInt(prompt("Digite a avaliação do produto: "))

  ids.push(id)
  nomes.push(nome)
  precos.push(preco)
  avaliacoes.push(avaliacao)
  contador++

  console.log("Produto cadastrado com sucesso!")
}

function buscarPorID(id) {
  for (let i = 0; i < ids.length; i++) {
    if (id == ids[i]) {
      console.log(
        `id: ${ids[i]}, nome: ${nomes[i]}, preço: R$ ${precos[i]}, avaliação: ${avaliacoes[i]}`
      )
      return // Encerra a função quando encontra o ID buscado
    }
  }
  console.log("Produto não encontrado.")
}

function buscarPorNome(nome) {
  for (let i = 0; i < nomes.length; i++) {
    if (nome === nomes[i]) {
      console.log(`ID do produto ${ids[i]}`)
      return ids[i] // Retorna o ID do produto quando encontra o nome
    }
  }
  console.log("Produto não encontrado.")
  return null // Retorna null quando o produto não é encontrado
}

function exibirOrdenadosPorID() {
  let idsOrdenados = [...ids] // Cria uma cópia do array ids
  idsOrdenados.sort((a, b) => a - b) // Ordena os IDs em ordem crescente

  for (let i = 0; i < idsOrdenados.length; i++) {
    let index = ids.indexOf(idsOrdenados[i]) // Encontra o índice do ID ordenado no array original
    console.log(
      `id: ${ids[index]}, nome: ${nomes[index]}, preço: R$ ${precos[index]}, avaliação: ${avaliacoes[index]}`
    )
  }
}

function exibirOrdenadosPorAvaliacao() {
  for (let i = 0; i < avaliacoes.length; i++) {
    for (let j = 0; j < avaliacoes.length - 1 - i; j++) {
      if (avaliacoes[j] < avaliacoes[j + 1]) {
        // Realiza a troca dos elementos para ordenar por avaliação
        ;[avaliacoes[j], avaliacoes[j + 1]] = [avaliacoes[j + 1], avaliacoes[j]]
        ;[ids[j], ids[j + 1]] = [ids[j + 1], ids[j]]
        ;[nomes[j], nomes[j + 1]] = [nomes[j + 1], nomes[j]]
        ;[precos[j], precos[j + 1]] = [precos[j + 1], precos[j]]
      }
    }
  }

  for (let i = 0; i < ids.length; i++) {
    console.log(
      `id: ${ids[i]}, nome: ${nomes[i]}, preço: R$ ${precos[i]}, avaliação: ${avaliacoes[i]}`
    )
  }
}

function atualizarPreco(id, novoPreco) {
  for (let i = 0; i < ids.length; i++) {
    if (id == ids[i]) {
      precos[i] = novoPreco
      console.log(`Preço do produto ${id} atualizado`)
      return // Encerra a função quando atualiza o preço
    }
  }
  console.log("Produto não encontrado.")
}

function deletarProduto(id) {
  for (let i = 0; i < ids.length; i++) {
    if (id == ids[i]) {
      ids.splice(i, 1) // Remove o elemento do array na posição i
      nomes.splice(i, 1)
      precos.splice(i, 1)
      avaliacoes.splice(i, 1)
      console.log("Produto deletado.")
      return // Encerra a função quando deleta o produto
    }
  }
  console.log("Produto não encontrado.")
}

// Funcionamento do programa
let continuar = true
while (continuar) {
  let opcao = parseInt(
    prompt(
      "Escolha: \n1 - Cadastrar produto \n2 - Buscar produto por ID \n3 - Buscar id por nome do produto \n4 - Exibir produtos odernados por ID \n5 - Exibir produtos ordernados por avaliações \n6 - Atualizar preço de um produto \n7 - Deletar produto \n8 - Encerrar programa"
    )
  )

  switch (opcao) {
    case 1:
      cadastrarProduto()
      break
    case 2:
      let idBusca = parseInt(prompt("Digite o ID do produto: "))
      buscarPorID(idBusca)
      break
    case 3:
      let nomeBusca = prompt("Digite o nome do produto: ")
      buscarPorNome(nomeBusca)
      break
    case 4:
      exibirOrdenadosPorID()
      break
    case 5:
      exibirOrdenadosPorAvaliacao()
      break
    case 6:
      let idAtualiza = parseInt(prompt("Digite o ID do produto: "))
      let novoPreco = parseFloat(prompt("Digite o novo preço do produto: "))
      atualizarPreco(idAtualiza, novoPreco)
      break
    case 7:
      let idDeleta = parseInt(prompt("Digite o ID do produto: "))
      deletarProduto(idDeleta)
      break
    case 8:
      continuar = false
      console.log("Programa encerrado.")
      break
    default:
      alert("Opção inválida!")
      break
  }
}

// Função para excluir produtos do carrinho
function excluirDoCarrinho(nomeProduto, quantidade) {
  let indexProduto = carrinho.findIndex(item => item.nome === nomeProduto);

  if (indexProduto !== -1) {
    // O produto está no carrinho
    let produtoNoCarrinho = carrinho[indexProduto];
    if (quantidade >= produtoNoCarrinho.quantidade) {
      // Excluir o produto inteiro do carrinho
      carrinho.splice(indexProduto, 1);
      console.log(`Produto ${nomeProduto} removido completamente do carrinho.`);
    } else {
      // Atualizar a quantidade do produto no carrinho
      produtoNoCarrinho.quantidade -= quantidade;
      console.log(`Foram removidos ${quantidade} ${nomeProduto}(s) do carrinho.`);
    }
  } else {
    console.log(`O produto ${nomeProduto} não está no carrinho.`);
  }
}

// Função para calcular o valor total dos produtos no carrinho
function calcularValorTotalCarrinho() {
  let valorTotal = 0;
  for (let item of carrinho) {
    let indexProduto = nomes.indexOf(item.nome);
    if (indexProduto !== -1) {
      valorTotal += precos[indexProduto] * item.quantidade;
    }
  }
  return valorTotal;
}

// Função para exibir o carrinho e o valor total
function exibirCarrinho() {
  console.log("Carrinho de Compras:");
  for (let item of carrinho) {
    let indexProduto = nomes.indexOf(item.nome);
    if (indexProduto !== -1) {
      console.log(`${item.nome} - Quantidade: ${item.quantidade} - Valor Unitário: R$ ${precos[indexProduto]} - Valor Total: R$ ${precos[indexProduto] * item.quantidade}`);
    }
  }
  console.log(`Valor Total do Carrinho: R$ ${calcularValorTotalCarrinho()}`);
}

// Fluxo de funcionamento do carrinho
let continuarCarrinho = true;
while (continuarCarrinho) {
  let opcaoCarrinho = parseInt(prompt("Escolha uma opção: \n1 - Adicionar produto ao carrinho \n2 - Excluir produto do carrinho \n3 - Exibir produtos no carrinho e valor total \n4 - Encerrar carrinho"));

  switch (opcaoCarrinho) {
    case 1:
      let nomeProduto = prompt("Digite o nome do produto: ");
      let quantidadeAdicionar = parseInt(prompt("Digite a quantidade a adicionar: "));
      adicionarAoCarrinho(nomeProduto, quantidadeAdicionar);
      break;
    case 2:
      let nomeProdutoExcluir = prompt("Digite o nome do produto: ");
      let quantidadeExcluir = parseInt(prompt("Digite a quantidade a excluir: "));
      excluirDoCarrinho(nomeProdutoExcluir, quantidadeExcluir);
      break;
    case 3:
      exibirCarrinho();
      break;
    case 4:
      continuarCarrinho = false;
      console.log("Carrinho encerrado.");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
}

