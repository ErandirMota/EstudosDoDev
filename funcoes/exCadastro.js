let nomes = []
let senhas = []
let contador = 0

function solicitarValores() {
  let nome = prompt("Digite o nome do usuário: ")
  nomes[contador] = nome
  let senha = prompt("Digite a senha do usuário: ")
  senhas[contador] = senha
  contador++

  solicitarDesejo(nome, senha)
}

function solicitarDesejo(nome, senha) {
  let escolha = parseInt(
    prompt(
      "\n1 - Cadastrar\n2 - Fazer login\n3 - Excluir cadastro\n4 - Encerrar programa"
    )
  )

  let cadastro
  let login
  let excluirCadastro
  switch (escolha) {
    case 1:
      nome = prompt("Digite o nome do usuário para cadastro: ")
      nomes[contador] = nome
      senha = prompt("Digite a senha do usuário para cadastro: ")
      senhas[contador] = senha
      contador++
      break
    case 2:
      nome = prompt("Digite o nome do usuário: ")
      senha = prompt("Digite a senha do usuário: ")
      break
    case 3:
      nome = prompt("Digite o nome do usuário que deseja excluir: ")
      senha = prompt("DIgite a senha do usuário que deseja excluir: ")
      break
    case 4:
      console.log("Programa encerrado.")
      break
    default:
      alert("Opção inválida!")
      break
  }
}

function procurarUsuario() {
  let nome = prompt("Digite o nome do usuário: ")
  let senha = prompt("Digite a senha do usuário: ")

  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] == nome) {
      if (senhas[i] == senha) {
        console.log("true");
      }
    } else {
      console.log("false");
    }
  }
}

console.log(procurarUsuario());
