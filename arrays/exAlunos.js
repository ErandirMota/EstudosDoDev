let idades = [];
let alturas = [];

let mediaAltura = 0;
let somaAlturas = 0;

for (let i = 0; i <= 5; i++) {
  let contador = 0;
  let idade = parseInt(prompt("Digite a idade do aluno: "));
  let altura = parseFloat(prompt("Digite a altura do aluno: "));
  somaAlturas += altura;
  idades[contador] = idade;
  alturas[contador] = altura;
  contador++;
}
let mediaAlunos = somaAlturas / 10;

let idadesMaioresTreze = [];
let IdadeMaiorTreze = 0;

for (let i = 0; i < idades.length; i++) {
  if (idades[i] > 13 && idades[i] < ) {
    IdadeMaiorTreze++;
    console.log(idadesMaioresTreze);
  }
}






