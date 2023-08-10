// Armazenar hoteis
let idsHoteis = [];
let nomesHoteis = [];
let categoriasHoteis = [];
let enderecosHoteis = [];
let telefonesHoteis = [];
let contadorHotel = 1;

// Armazenar reservas
let idsReserva = [];
let idsHotelReservas = [];
let nomes = [];
let diasEntrada = [];
let diasSaida = [];
let contadorReserva = 1;

// Cadastrar um hotel
function cadastrarHotel() {
  idsHoteis.push(contadorHotel);
  let nomeHotel = prompt("Digite o nome do hotel: ");
  let categoriaHotel = parseInt(prompt("Digite a categoria do hotel: "));
  let enderecoHotel = prompt("Digite o endereço do hotel: ");
  let telefoneHotel = prompt("Digite o número de telefone do hotel: ");

  nomesHoteis.push(nomeHotel);
  categoriasHoteis.push(categoriaHotel);
  enderecosHoteis.push(enderecoHotel);
  telefonesHoteis.push(telefoneHotel);
  console.log("Hotel cadastrado com sucesso! ");
  contadorHotel++;
}

// Cadastrar uma reserva
function cadastrarReserva() {
  idsReserva.push(contadorReserva);
  let existe = false;
  let idHotelReserva;
  do {
    idHotelReserva = parseInt(
      prompt("Digite o id do hotel que deseja reservar: ")
    );
    if (idsHoteis.includes(idHotelReserva)) {
      existe = true;
    } else {
      console.log("id do hotel não cadastrado!");
    }
  } while (!existe)

  idsHotelReservas.push(idHotelReserva);
  let nome = prompt("Digite o nome do responsável pela reserva: ");
  nomes.push(nome);
  let diaEntrada = parseInt(prompt("Digite o dia de entrada da reserva: "));
  diasEntrada.push(diaEntrada);
  let diaSaida;
  do {
    diaSaida = parseInt(prompt("Digite o dia de saída da reserva: "));
    if (diaSaida > diaEntrada) {
      diasSaida.push(diaSaida);
    } else {
      console.log("O dia de saída deve ser maior que o dia de entrada!");
    }
  } while (diaSaida <= diaEntrada)

  console.log("Reserva cadastrada com sucesso!");
  contadorReserva++;
}

// Exibe todas as reservas de um hotel
function exibirReservas(idHotelReserva) {
  if (!idsHoteis.includes(idHotelReserva)) {
    console.log("Id inválido!");
    return;
  }

  for (let i = 0; i < idsHotelReservas.length; i++) {
    if (idHotelReserva === idsHotelReservas[i]) {
      console.log(`Nome do hotel: ${nomesHoteis[idHotelReserva - 1]}`);
      console.log(`Nome do responsável: ${nomes[i]}`);
      console.log(`Dia da entrada: ${diasEntrada[i]}`);
      console.log(`Dia de saída: ${diasSaida[i]}`);
    }
  }
}

// ... (continua o restante do código)

function exibirHoteis(idReserva) {
  for (let i = 0; i < idsReserva; i++) {
    if (idReserva == idsReserva[i]) {
      console.log(`Nome do hotel: ${nomesHoteis[i]}`);
      console.log(`Endereço: ${enderecosHoteis[i]}`);
      console.log(`Dia de entrada: ${diasEntrada}`);
      console.log(`Dia de saída: ${diasSaida}`);
    } else {
      console.log("Id inválido");
    }
  }
}

function exibirTodasReservas(nome) {
  for (let i = 0; i < idsReserva; i++) {
    if (nome == nomes[i]) {
      console.log(`todas as reservas: ${idsReserva[i]}`);
    } else {
      console.log("Nome incorreto!");
    }
  }
}

function exibirHoteisCategoriasIguais(categoria) {
  let hoteis = [];
  for (let i = 0; i < idsHoteis; i++) {
    if (categoria === categoriasHoteis[i]) {
      hoteis.push(nomesHoteis[i]);
    }
  }
  return hoteis;
}

function atualizarTelefone(idHotel, telefoneHotel) {
  for (let i = 0; i < idsHoteis; i++) {
    if (idHotel === idsHoteis[i] && telefoneHotel === telefonesHoteis[i]) {
      console.log("Telefone atualizado com sucesso!");
    } else {
      console.log("Id ou telefone incorretos.");
    }
  }
}

// Fluxo de funcionamento do programa
let continuar = true
while (continuar) {
  let opcao = parseInt(
    prompt(
      "Escolha: \n1 - Cadastrar hotel \n2 - Cadastrar uma reserva \n3 - Exibir todas as reservas do hotel \n4 - Exibir uma reserva \n5 - Exibir toda as reservas de uma pessoa \n6 - Exibir todos os hoteis da mesma categoria \n7 - Atualizar número de telefone do cadastro \n8 - Encerrar programa"
    )
  );

  switch (opcao) {
    case 1:
      cadastrarHotel();
      break;
    case 2:
      cadastrarReserva();
      break;
    case 3:
      let idHotelReserva = parseInt(prompt("Digite o id do hotel: "));
      exibirReservas(idHotelReserva);
      break;
    case 4:
      let idReserva = parseInt(prompt("Digite o id da reserva: "));
      exibirHoteis(idReserva);
      break;
    case 5:
      let nome = prompt("Digite o nome da pessoa que deseja ver as reservas: ");
      exibirTodasReservas(nome);
      break;
    case 6:
      let hoteis = parseInt(
        prompt("Digite a categoria de hoteis que deseja ver: ")
      );
      console.log(hoteis);
      break;
    case 7:
      let idHotel = parseInt(prompt("Digite o id do hotel: "));
      let telefoneHotel = prompt("Digite o telefone do hote: ");
      atualizarTelefone(idHotel, telefoneHotel);
      break;
    case 8:
      console.log("Programa encerrado.");
      continuar = false;
      break;
    default:
      alert("Opção inválida!");
      break;;
  }
}
