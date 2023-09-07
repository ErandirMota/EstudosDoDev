let nomes = [];
let senhas = [];

// Usuário vai escolher o que deseja fazer
function desejaFazer() {
  let escolha = parseInt(prompt("\n1 - Cadastrar \n2 - Fazer login \n3- Excluir cadastro \n4- Encerrar programa"));
  return escolha;
}

// Cadastrar um novo usuário
function cadastrar() {
  let nome = prompt("Insira um nome: ");
  let senha = prompt("Insira uma senha: ");

  nomes.push(nome);
  senhas.push(senha);
}

// Verificar se login tem nome e senha corretas
function fazerLogin(nome, senha) {
  let indice = nomes.indexOf(nome);
  if (indice !== -1 && senhas[indice] == senha) {
    return true;
  } else {
    return false;
  }
}

// EXcluir um cadastro de usuário
function excluirCadastro(excluirNome) {
  let indice = nomes.indexOf(excluirNome);
  if (indice !== -1) {
    nomes.splice(indice, 1);
    senhas.splice(indice, 1);
    console.log("Cadastro excluído com sucesso!");
  } else {
    console.log("Usuário não encontrado");
  }
}

// Fluxo de funcionamento do programa
let continuar = true;
while (continuar) {
  let escolha = desejaFazer();

  switch (escolha) {
    case 1:
      cadastrar();
      break;
    case 2:
      let nome = prompt("Digite o nome do usuário: ");
      let senha = prompt("Digite a senha do usuário: ");
      fazerLogin(nome, senha);
      break;
    case 3:
      let excluirNome = prompt("Digite o nome de usuário que deseja excluir: ");
      excluirCadastro(excluirNome);
      break;
    case 4:
      console.log("Programa encerrado.");
      continuar = false;
      break;
    default:
      alert("Opção inválida!");
      break;
  }
}