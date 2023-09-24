let quantidadeHomens = 0;
let mulheresNotaAcima7 = 0;
let maiorNotaHomens = 0;
let quantidadeAlunos = 0;
let mediaGeral = 0;

for (let i = 0; i <= 10; i++) {
  let notas = parseInt(prompt("Digite a nota do aluno(a): "))
  let sexo = prompt("Digite o sexo do aluno(a): (m) masculino e (f) feminino")
  quantidadeAlunos++;

  if (sexo == "m") {
    quantidadeHomens++;
    if(maiorNotaHomens < notas) {
      maiorNotaHomens = notas;
    }
  } else {
    if(notas > 7) {
      mulheresNotaAcima7++;
    }
  }
  mediaGeral = notas / 10;
}


console.log("A média geral do alunos é: ", mediaGeral);
console.log("A quantidade de homens que enviaram a nota é: ", quantidadeHomens);
console.log("A quantidade de mulheres com nota acima de 7 é: ", mulheresNotaAcima7);
console.log("A maior nota entre os homens é: ", maiorNotaHomens);