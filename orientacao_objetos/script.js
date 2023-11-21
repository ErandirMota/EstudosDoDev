
class Pessoa {
  nome
  #idade

  constructor(nome, idade) {
    console.log("Olá estou construindo uma pessoa");
    this.nome = nome;
    this.setIdade(idade);
  }

  setIdade(idade) {
    if (idade < 18) {
      alert("Não pode menor de idade!");
    } else {
      this.#idade = idade;
    }
  }

  getIdade() {
    return this.#idade;
  }

  falar(texto) {
    console.log(texto);
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
console.log(primeiraPesssoa.getIdade());
