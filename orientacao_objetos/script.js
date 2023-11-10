
class Pessoa {
  nome
  idade

  constructor(nome) {
    this.nome = nome;
    console.log("Olá estou construindo uma pessoa");
  }

  falar(texto) {
    console.log(texto);
    this.nome = nome;
    this.idade = idade;
  }
}

class Motorista extends Pessoa {
  carro

  constructor(nome, idade, carro) {
    super(nome, idade);
    this.carro = carro;
  }

  ultrapassar() {
    console.log("Ultrapassei alguém");
  }
}

let primeiraPesssoa = new Pessoa("Erandir", 19);
let primeiroMotorista = new Motorista("Claudio", 23, "Fiesta");
