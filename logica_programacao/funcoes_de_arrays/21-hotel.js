// Array de Hoteis
let idsHotel = [];
let nomesHotel = [];
let categoriasHotel = [];
let enderecosHotel = [];
let telefonesHotel = [];
let contadorIdHotel = 1;

// Array de Reservas
let idsReserva = [];
let idsHotelReserva = [];
let nomesResponsaveis = [];
let diasEntradas = [];
let diasSaidas = [];
let contadorIdReserva = 1; 

function cadastrarHotel() {
  idsHotel.push(contadorIdHotel)
  let nome = prompt("Digite o nome do hotel: ");
  let categoria = prompt("Digite a categoria do hotel: ");
  let endereco = prompt("Digite o endereço do hotel: ");
  let telefone = prompt("Digite o número de telefone do hotel: ");

  contadorIdHotel++;
  nomesHotel.push(nome);
  categoriasHotel.push(categoria);
  enderecosHotel.push(endereco);
  telefonesHotel.push(telefone);
}

function cadastrarReserva() {
  idsReserva.push(contadorIdReserva);
  do {
    let existe = false;
    let idHotelReserva = parseInt(prompt("Digite o id do hotel da reserva: "));
    for (let i = 0; i < idsHotel.length; i++) {
      if (idHotelReserva == idsHotel[i]) {
        idsHotelReserva.push(idHotelReserva);
        existe = true;
        i = idsHotel.length;
      } else if (i == idsHotel.length - 1) {
        console.log("ID do hotel não cadastrado!");
      }
    }
  } while (!existe)

  let nome = prompt("Digite o nome do responsável: ");
  let diaEntrada = prompt("Digite o dia de entrada da reserva: ");
  nomesResponsaveis.push(nome);
  diasEntradas.push(diaEntrada);
  do {
    let diaSaida = prompt("Digite o dia de saida da reserva: ");
    if (diaSaida > diaEntrada) {
      diasSaidas.push(diaSaida);
    } else {
      console.log("O dia de saída deve ser maior que o de entrada.");
    }
  } while (diaSaida < diaEntrada)

  console.log("Reserva cadastrada com sucesso!");
  contadorIdReserva++;
}

function procurarReservasPeloHotel(idHotel) {
  idsHotelReserva.forEach(hotel => {
    if (hotel == idHotel) {
      let i = idsHotelReserva.indexOf(hotel);
      console.log(`Nome do Hotel: ${nomesHotel[idHotel - 1]}`);
      console.log(`Nome do Responsável: ${nomesResponsaveis[i]}`);
      console.log(`Dia de Entrada: ${diasEntradas[i]}`);
      console.log(`Dia de Saida: ${diasSaidas[i]}`);
    }
  });
}

function procurarHotelPelaReserva(idsReserva) {
  let idHotel = idsHotelReserva[idsReserva - 1];
  console.log(`Hotel: ${nomesHotel[idHotel - 1]}`);
  console.log(`Endereço: ${enderecosHotel[idHotel - 1]}`);
  console.log(`Dia de Entrada: ${diasEntradas[idsReserva - 1]}`);
  console.log(`Dia de Saída: ${diasSaidas[idsReserva - 1]}`);
}

function procurarReservaPeloNome(nome) {
  for (let i = 0; i < nomesResponsaveis.length; i++) {
    if (nome == nomesResponsaveis[i]) {
      console.log("Id da reserva:", idsReserva[i]);
      console.log("Hotel da reserva:", nomesHotel[(idHotelReserva[i]) - 1]);
    }
  }
}

function procurarHotelPelaCategoria(categoria) {
  let hoteis = [];
  for (let i = 0; i < categoriasHotel.length; i++) {
    if (categoria == categoriasHotel[i]) {
      hoteis.push(nomesHotel[i]);
    }
  }
  
  return hoteis;
}

function atualizarTelefone(idHotel, telefone) {
  let i = idsHotel.indexOf(idHotel);
  telefonesHotel[i] = telefone;
  console.log("Telefone atualizado");
}

// Fluxo de funcionamento
let continuar = true;
while (continuar) {
  let opcao = parseInt(prompt("Escolha uma opção: \n1 - Cadastrar hotel \n2 - Cadastrar reserva \n3 - Procura reserva pelo hotel \n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hoteis pela categoria \n7 - Atualizar telefone de um hotel \n8- Encerrar programa"));

  switch (opcao) {
    case 1:
      cadastrarHotel();
      break;
    case 2:
      cadastrarReserva();
      break;
    case 3:
      procurarReservasPeloHotel(prompt("Digite o id do hotel que deseja procurar:"));
      break;
    case 4:
      procurarHotelPelaReserva(prompt("Digite o id da reserva:"));
      break;
    case 5:
      procurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva:"));
      break;
    case 6:
      procurarHotelPelaCategoria(prompt("Digite a categoria que deseja procurar:"));
      console.log(hoteis);
      break;
    case 7:
      let idHotel = prompt("Digite o id do hotel que deseja atualizar:");
      let telefone = prompt("Digite o novo telefone:");
      atualizarTelefone(idHotel, telefone);
      break;
    case 8:
      console.log("Programa encerrado.");
      continuar = false;
      break;
    default:
      alert("[ERRO] Opção Inválida!");
      break;
  }
}