
class Carro {
  Nome
  Potencia
  VelocidadeMaxima
  Aceleracao

  constructor(nome, potencia, velocidadeMaxima, aceleracao) {
    this.Nome = nome;
    this.Potencia = potencia;
    this.VelocidadeMaxima = velocidadeMaxima;
    this.Aceleracao = aceleracao;
  }

  calcularTempo(distancia) {
    let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao);
    return resultado;
  }
}

let carros = [];

let carro1 = new Carro("Mercedes", 200, 350, 5);
let carro2 = new Carro("Ferrari", 300, 350, 3);
let carro3 = new Carro("Audi", 300, 150, 7);
let carro4 = new Carro("McLaren", 270, 300, 4);

carros.push(carro1);
carros.push(carro2);
carros.push(carro3);
carros.push(carro4);

class Corrida {
  Nome
  Tipo
  Distancia
  Vencedor = ""

  constructor(nome, tipo, distancia) {
    this.Nome = nome;
    this.Tipo = tipo;
    this.Distancia = distancia;
  }

  verificarVencedor(carros) {
    let menorTempo = 10000;
    for (let i = 0; i < carros.length; i++) {
      let tempo = carros[i].calcularTempo(this.Distancia);
      if (tempo < menorTempo) {
        menorTempo = tempo;
        this.Vencedor = carros[i].Nome
      }
    }
  }

  exibirVencedor(carros) {
    this.verificarVencedor(carros);
    console.log(`O vencedor da corrida foi: ${this.Vencedor}`);
  }
}

let corrida = new Corrida("Turismo", "StockCar", 2400);
corrida.exibirVencedor(carros);