for (let i = 1; i <= 5; i++) {
  let valorRecebido = parseInt(prompt("Digite um número: "))

  for (let i2 = 1; i2 <= 5; i2++) {
    let numero = valorRecebido + i2
    let multiplicacao = valorRecebido * numero
    console.log(valorRecebido, "x", numero, "=", multiplicacao)
  }
  
}
