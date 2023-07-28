function verificarNumero() {
  let divisores = 0
  for (let i = 1; i < numero; i++) {
    if (numero % 1 === 0) {
      divisores += i
    }
  }
  
  return divisores == numero
}
