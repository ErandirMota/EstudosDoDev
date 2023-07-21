let alunos = [];
let notas = [];
let contador = 0;
let somaNotas = 0;
let somaAlunos = 0;

let continuar = true;
do {
  let aluno = prompt("Digite o nome do aluno: ");
  alunos[contador] = aluno;
  somaAlunos++;
  let nota = parseFloat(prompt("Digite a nota do aluno: "));
  notas[contador] = nota;
  somaNotas += nota;

  contador++;

  let desejaContinuar = parseInt(prompt("Deseja continuar adicionando? (1) sim ou (2) não"));

  if (desejaContinuar === 2) {
    continuar = false;
  }
} while (continuar)

let mediaGeral = somaNotas / somaAlunos;

console.log(`Notas dos alunos: ${notas}`);
console.log(`Soma das notas: ${somaNotas}`);
console.log(`Média geral da turma: ${mediaGeral}`);