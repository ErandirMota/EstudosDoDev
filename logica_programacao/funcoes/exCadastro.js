let nomes = []
let senhas = []

function solicitarValores() {
  let nome = prompt("Digite o nome do usuário: ")
  let senha = prompt("Digite a senha do usuário: ")

  nomes.push(nome)
  senhas.push(senha)
}

function escolherDesejo() {
  let opcao = parseInt(
    prompt(
      "Escolha: \n1 - Cadastrar \n2 - Fazer login \n3 - Excluir cadastro \n4 - Encerrar programa"
    )
  )
  return opcao
}

function fazerLogin() {
  let nome = prompt("Digite o nome do usuário: ")
  let senha = prompt("Digite a senha do usuário: ")

  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === nome && senhas[i] === senha) {
      return true
    }
  }
  return false
}

function excluirCadastro() {
  let nomeExcluir = prompt("Digite o nome do usuário que deseja excluir: ")
  let indiceExcluir = nomes.indexOf(nomeExcluir)

  if (indiceExcluir !== -1) {
    nomes.splice(indiceExcluir, 1)
    senhas.splice(indiceExcluir, 1)
    console.log("Usuário excluído com sucesso!")
  } else {
    console.log("Usuário não encontrado!")
  }
}

// Fluxo de funcionamento do programa
let continuar = "s"

while (continuar === "s") {
  let opcao = escolherDesejo()

  switch (opcao) {
    case 1:
      solicitarValores()
      break
    case 2:
      let login = fazerLogin()
      if (login) {
        console.log("Login feito com sucesso!")
      } else {
        console.log("Usuário não encontrado!")
      }
      break
    case 3:
      excluirCadastro()
      break
    case 4:
      console.log("Programa encerrado.")
      continuar = "n"
      break
    default:
      console.log("Opção inválida!")
      break
  }

  if (continuar === "s") {
    continuar = prompt(
      "Deseja continuar realizando operações? (s) sim ou (n) não"
    )
  }
}
