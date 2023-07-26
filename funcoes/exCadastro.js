// Arrays para guardar os nomes e senhas
let nomes = [];
let senhas = [];
let contador = 0;

// Função para cadastrar um novo usuário
function cadastrarUsuario() {
  let nome = prompt("Digite o nome do usuário: ");
  let senha = prompt("Digite a senha do usuário: ");

  nomes[contador] = nome;
  senhas[contador] = senha;
  contador++;
  console.log("Usuário cadastrado com sucesso!");
}

// Função para exibir as opções e receber resposta do usuário
function exibirEscolha() {
  let opcao = parseInt(prompt("Escolha umas das opções: \n1 - Cadastrar usuário \n2 - Fazer login \n3 - Excluir cadastro \n4 - Encerrrar programa"));
  return opcao;
}

// Função para fazer login
function fazerLogin() {
  let nome = prompt("Digite o nome do usuário: ");
  let senha = prompt("Digite a senha do usuário: ");

  for (let i = 0; i < nomes.length; i++) {
    if (nome == nomes[i] && senha == senhas[i]) {
      return true;
    } else {
      return false;
    }
  }
}

// Função para excluir cadastro
function excluirCadastro() {
  let nomesSup = [];
  let senhasSup = [];
  let contSup = 0;

  let nome = prompt("Digite o nome do usuário que será excluído: ");

  for (let i = 0; i < nomes.length; i++) {
    if (nome == nomes[i]) {
      console.log("Usuário excluído com sucesso!")
    } else {
      nomesSup[contSup] = nomes[i];
      senhasSup[contSup] = senhas[i];
      contSup++;
    }
  }

  nomes = nomesSup;
  senha = senhasSup;
}

// Fluxo de funcionamento do programa
let continuar = "s";
while (continuar == "s") {
  let opcao = exibirEscolha();
  
  switch (opcao) {
    case 1:
      cadastrarUsuario();
      break;
    case 2:
      let login = fazerLogin();
      if (login == true) {
        console.log("Login feito com sucesso")
      } else {
        console.log("Usuário não foi encontrado")
      }
      break;
    case 3:
      excluirCadastro();
      break;
    case 4:
      console.log("Programa encerrado.")
      continuar = "n"
      break;
    default:
      console.log("Opção inválida!");
      break;
  }
  if (continuar == "s") {
    continuar = prompt("Deseja realizar outra operação (s) Sim ou (n) Não: ");
  }
}

