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
      console.log(`id: ${ids[i]}`)
      console.log(`nome: ${nomes[i]}`)
      console.log(`preço: ${precos[i]}`)
      console.log(`avaliação: ${avaliacoes[i]}`)
    }
  }
}

function buscarPorNome(nome) {
  for (let i = 0; i < nomes.length; i++) {
    if (nome == nomes[i]) {
      return ids[i]
    }
  }
}

function exibirOrdernadosPorID() {
  let idsSup = []
  let nomesSup = []
  let precosSup = []
  let avaliacoesSup = []
  let contadorSup = 0

  for (let i = 1; i <= contador; i++) {
    for (let j = 0; j < ids.length; j++) {
      if (ids[j] == i) {
        idsSup[contadorSup] = ids[j]
        nomesSup[contadorSup] = nomes[j]
        precosSup[contadorSup] = precos[j]
        avaliacoesSup[contadorSup] = avaliacoes[j]
        contadorSup++
        break
      }
    }
  }

  for (let i = 0; i < ids.length; i++) {
    console.log(
      `id: ${idsSup[i]}, nome: ${nomesSup[i]}, preços: ${precosSup[i]}, avaliações: ${avaliacoesSup[i]}`
    )
  }
}

function exibirOrdenadosPorAvaliacao() {
  for (let i = 0; i < avaliacoes.length - 1; i++) {
    for (let j = 0; j < avaliacoes.length - i - 1; j++) {
      if (avaliacoes[j] < avaliacoes[j + 1]) {
        // Trocar a ordem dos elementos
        ;[avaliacoes[j], avaliacoes[j + 1]] = [avaliacoes[j + 1], avaliacoes[j]]
        ;[ids[j], ids[j + 1]] = [ids[j + 1], ids[j]]
        ;[nomes[j], nomes[j + 1]] = [nomes[j + 1], nomes[j]]
        ;[precos[j], precos[j + 1]] = [precos[j + 1], precos[j]]
      }
    }
  }

  for (let i = 0; i < ids.length; i++) {
    console.log(
      `id: ${ids[i]}, nome: ${nomes[i]}, preço: ${precos[i]}, avaliação: ${avaliacoes[i]}`
    )
  }
}

function atualizarPreco(id, novoPreco) {
  for (let i = 0; i < ids.length; i++) {
    if (id == ids[i]) {
      precos[i] = novoPreco
    }
  }

  console.log(`preço do produto ${id} atualizado.`)
}

function deletarProduto(id) {
  let indice = ids.indexOf(id)
  if (indice !== -1) {
    console.log("Produto excluído!")
    ids.splice(indice, 1)
    nomes.splice(indice, 1)
    precos.splice(indice, 1)
    avaliacoes.splice(indice, 1)
  } else {
    console.log("Produto não encontrado!")
  }
}

let continuar = true
while (continuar) {
  let opcao = parseInt(
    prompt(
      "Escolha: \n1 - Cadastrar produto \n2 - Buscar produto por ID \n3 - Buscar produto por nome \n4 - Exibir produtos ordenados por ID \n5 - Exibir produtos ordenados por avaliação \n6 - Atualizar preço do produto \n7 - Deletar um produto \n8 - Encerrar programa"
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
      let idEncontrado = buscarPorNome(nomeBusca)
      if (idEncontrado !== undefined) {
        console.log(`Produto encontrado com ID: ${idEncontrado}`)
      } else {
        console.log("Produto não encontrado.")
      }
      break
    case 4:
      exibirOrdernadosPorID()
      break
    case 5:
      exibirOrdenadosPorAvaliacao()
      break
    case 6:
      let idAtualizar = parseInt(prompt("Digite o ID do produto: "))
      let novoPreco = parseFloat(prompt("Digite o novo preço do produto: "))
      atualizarPreco(idAtualizar, novoPreco)
      break
    case 7:
      let idDeletar = parseInt(
        prompt("Digite o ID do produto que deseja excluir: ")
      )
      deletarProduto(idDeletar)
      break
    case 8:
      console.log("Programa encerrado!")
      continuar = false
      break
    default:
      alert("Opção inválida!")
      break
  }
}
