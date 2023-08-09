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
  let categoriaHotel = parseInt(prompt("Digite a categoria do hotel"));
  let enderecoHotel = prompt("Digite o endereço do hotel: ");
  let telefoneHotel = prompt("Digite o número de telefone do hotel");

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
  do {
    let existe = false;
    let idHotelReserva = parseInt(prompt("Digite o id do hotel que deseja reservar: "));
    for (let i = 0; i < idsHoteis.length; i++) {
      if (idHotelReserva == idsHoteis) {
        existe = true;
        break;
      } else {
        console.log("id do hotel não cadastrado!");
      }
    }
  } while (!existe)

  let nome = prompt("Digite o nome do responsavel pela reserva: ");
  nomes.push(nome);
  let diaEntrada = parseInt(prompt("Digite o dia de entrada da reserva: "));
  diasEntrada.push(diaEntrada);
  do {
    let diaSaida = parseInt(prompt("Digite o dia da saida da reserva: "));
    if (diaEntrada < diaSaida) {
      diasSaida.push(diaSaida);
    } else {
      console.log("O dia da saida tem que ser maior que o dia de entrada!");
    }
  } while (diaSaida < diaEntrada)

  console.log("Reserva cadastrada com sucesso!");
  contadorReserva++;
}

// Exibe todas as reservas de um hotel
function exibirReservas(idHotel) {
  console.log()
}

function exibirHoteis(idReserva) {}
