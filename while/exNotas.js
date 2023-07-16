let mediaGeral = 0;
let quantidadeHomens = 0;
let quantidadeMulheresNotaAcima7 = 0;
let maiorNotaHomens = 0
let cadastrarNota = true;
let alunos = 0;

while (cadastrarNota == true) {
  let nota = parseInt(prompt("Digite a nota do aluno: "))
  let sexo = prompt("Digite o sexo do aluno: (1) Masculino e (2) Feminino")
  alunos++;

  if(sexo == 1) {
    quantidadeHomens++
    if(nota > maiorNotaHomens) {
      maiorNotaHomens = nota;
    }
  } else {
    if(nota > 7) {
      quantidadeMulheresNotaAcima7++;
    }
  }

  let desejaContinuar = prompt("Deseja continuar? (s) sim e (n) não")
  if(desejaContinuar == "s") {
    cadastrarNota = true;
  } else {
    cadastrarNota = false;
  }
  mediaGeral = nota / alunos
}

console.log("A média geral é:", mediaGeral);
console.log("A quantidade de homens que enviaram as notas é: ", quantidadeHomens);
console.log("A quantidade de mulheres com nota acima de 7 é: ", quantidadeMulheresNotaAcima7);
console.log("A maior nota entre os homens é: ", maiorNotaHomens);