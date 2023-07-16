let nomes = []
let senhas = []

let nome = prompt("Digite o nome do usuário: ")
let senha = prompt("Digite a senha do usuário: ")

let contador = 0

nomes[contador] = nome
senhas[contador] = senha;
contador++

let continuar = true
while (continuar) {
  // Uusário deve escolher opções
  let opcao = parseInt(
    prompt("Digite: (1) Cadastro, (2) Fazer login, (3) Encerrar operação")
  )

  if (opcao === 1) {
    // Cadastrar novo usuário
    nome = prompt("Digite o nome para cadastro do usuário: ")
    senha = prompt("Digite a senha para cadastro do usuário: ")
    nomes[contador] = nome
    senhas[contador] = senha
    contador++
  } else if (opcao === 2) {
    nome = prompt("Digite o nome do usuário: ")
    senha = prompt("Digite a senha do usuário: ")

    let encontrouConta = false
    for (let i = 0; i < nomes.length; i++) {
      // Verificar se a conta existe
      if (nomes[i] == nome && senhas[i] == senha) {
        encontrouConta = true
        console.log("Você já tem uma conta existente!")
        break
      }
    }
    if (!encontrouConta) {
      alert("[ERRO] Você não tem conta existente!")
    }
  } else if (opcao === 3) {
    // Encerrar o programa
    continuar = false
  } else {
    // Invalidar opções diferentes
    alert("Opção inválida!")
  }
}

let contaEncontrada = false
let excluirCadastro = true
while (excluirCadastro) {
  let desejaExcluir = prompt(
    "Você deseja excluir o cadastro do usuário? (s) Sim ou (n) Não"
  )

  if (desejaExcluir == "s") {
    let excluirNome = prompt("Digite o nome do usuário que deseja excluir: ")
    let excluirSenha = prompt("Digite a senha do usuário que deseja excluir: ")

    for (let cont = 0; cont < nomes.length; cont++) {
      if (nomes[cont] == excluirNome && senhas[cont] == excluirSenha) {
        // Verificar conta existente
        contaEncontrada = true;
        nomes[cont] -= excluirNome;
        senhas[cont] -= excluirSenha;
        console.log("Cadastro excluido com sucesso!");
        break;
      }
    }
    if (!contaEncontrada) {
      alert("Este usuário não tem cadastro!")
    }
  } else if (desejaExcluir == "n") {
    excluirCadastro = false
  } else {
    alert("Escolha uma opção válida!")
  }
}

console.table(nomes, senhas);
