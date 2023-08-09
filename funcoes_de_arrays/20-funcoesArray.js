let nomes = [];
let senhas = [];

function desejaFazer() {
  let opcao = parseInt(
    prompt(
      "Escolha: \n1 - Cadastrar \n2 - Fazer login \n3 - Excluir cadastro \n4 - Encerrar programa"
    )
  );
  return opcao;
}

function cadastrar() {
  let nome = prompt("Digite o nome que deseja cadastrar: ");
  let senha = prompt("Digite a senha que deseja cadastrar: ");
  nomes.push(nome);
  senhas.push(senha);
  console.log("Cadastro realizado com sucesso!");
}

function fazerLogin(nome, senha) {
  let indice = nomes.indexOf(nome);
  if (indice !== -1 && senhas[indice] === senha) {
    return true;
  } else {
    return false;
  }
}

function excluirCadastro(nomeExcluir) {
  let indice = nomes.indexOf(nomeExcluir);
  if (indice !== -1) {
    nomes.splice(indice, 1);
    senhas.splice(indice, 1);
    console.log("Cadastro excluído com sucesso!");
  } else {
    console.log("Usuário não foi encontrado!");
  }
}

// Fluxo de funcionamento
let continuar = true;
while (continuar) {
  let opcao = desejaFazer();

  switch (opcao) {
    case 1:
      cadastrar();
      break;
    case 2:
      let nomeLogin = prompt("Digite o nome de login: ");
      let senhaLogin = prompt("Digite a senha de login: ");
      let login = fazerLogin(nomeLogin, senhaLogin);
      if (login) {
        console.log("Login feito com sucesso!");
      } else {
        console.log("Nome ou senha estão incorretos!")
      };
      break;
    case 3:
      let nomeExcluir = prompt("Digite o nome que deseja excluir: ");
      excluirCadastro(nomeExcluir);
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
