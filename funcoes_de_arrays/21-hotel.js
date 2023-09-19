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
  idHoteis.push(contadorIdHotel)
  let nome = prompt("Digite o nome do hotel: ");
  let categoria = prompt("Digite a categoria do hotel: ");
  let endereco = prompt("Digite o endereço do hotel: ");
  let telefone = prompt("Digite o número de telefone do hotel: ");

  contHotel++;
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

function ProcurarHotelPelaReserva(idsReserva) {
  let idHotel = idsHotelReserva[idsReserva - 1];
  console.log(`Hotel: ${nomesHotel[idHotel - 1]}`);
  console.log(`Endereço: ${enderecosHotel[idHotel - 1]}`);
  console.log(`Dia de Entrada: ${diasEntradas[idsReserva - 1]}`);
  console.log(`Dia de Saída: ${diasSaidas[idsReserva - 1]}`);
}