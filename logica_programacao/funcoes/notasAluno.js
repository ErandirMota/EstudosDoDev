
function receberDados() {
  let notasAlunos = [10, 7, 8]
  let letra = "A"
}

function calcularMediaAritmetica(notasAlunos) {
  let mediaAritmetica = 0;

  for (let i = 0; i < notasAlunos.length; i++) {
    mediaAritmetica += notasAlunos[i];
  }

  return mediaAritmetica;
}

function calcularMediaPonderada(notasAlunos) {
  let numero = 0;
  let mediaPonderada = 0;

  for (let i = 0; i < notasAlunos.length; i++) {
    numero = (notasAlunos[i] * 5) / 10;
  }
}