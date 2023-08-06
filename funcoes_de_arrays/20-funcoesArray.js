let nomes = []
let senhas = []

function solicitarOpcao() {
  let opcao = parseInt(
    prompt(
      "Escolha: \n1 - Cadastrar \n2 - Login \n3 - Excluir cadastro \n4 - Encerrar programa"
    )
  );
  return opcao;
}

// Função para solicitar nome e senha ao usuário
function fazerCadastro() {
  nomes.push(prompt("Digite o nome do usuário: "));
  senhas.push(prompt("Digite a senha do usuário: "));
}

// Função para fazer login
function fazerLogin(nome, senha) {
  let indice = nomes.indexOf(nome);
  if (indice !== -1 && senhas[indice] === senha) {
    return true;
  } else {
    return false;
  }
}

// Função para excluir cadastro
function excluirCadastro(nome) {
  let indice = nomes.indexOf(nome);
  if (indice !== -1) {
    nomes.splice(indice, 1);
    senhas.splice(indice, 1);
    console.log("Cadastro excluído com sucesso!");
  } else {
    console.log("Nome de usuário não encontrado.");
  }
}

// Funcionamento do programa
let continuar = true;
while (continuar) {
  let opcao = solicitarOpcao();

  switch (opcao) {
    case 1:
      fazerCadastro();
      break;
    case 2:
      let nome = prompt("Digite o nome do usuário: ");
      let senha = prompt("Digite a senha do usuário: ");
      let login = fazerLogin(nome, senha);
      if (login) {
        console.log("Login feito com sucesso");
      } else {
        console.log("Nome ou senha incorretas!");
      }
      break;
    case 3:
      let nomeUser = prompt("Digite o nome do usuário que deseja excluir: ");
      excluirCadastro(nomeUser);
      break;
    case 4:
      continuar = false;
      console.log("Programa encerrado.");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
}
