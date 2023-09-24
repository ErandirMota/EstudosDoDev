let continuar = 1;

while (continuar === 1) {
  console.log("--------------------")
  let nome = prompt("Digite o nome do usuário: ")
  let idade = parseInt(prompt("Digite a idade do usuário: "))
  let peso = parseFloat(prompt("Digite o peso do usuário: "))
  let altura = parseFloat(prompt("Digite a altura do usuário: "))
  let profissao = prompt("Digite a profissão do usuário: ")

  console.log(
    `Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura} de altura e pesa ${peso}kg.`
  )

  if (idade >= 18) {
    console.log(`${nome}, você já está liberado para tomar umas geladas.`)
  } else {
    console.log(`${nome}, sem gelada pra você, mano!`)
  }

  console.log("--------------------")

  let idadeDias = idade * 365
  let idadeMeses = idade * 12
  let idadeSemanas = idade * 52

  console.log(`Idade em dias é: ${idadeDias} dias.`)
  console.log(`idade em meses é: ${idadeMeses} meses.`)
  console.log(`idade em semanas é: ${idadeSemanas} semanas.`)

  let anoNascimento = 2023 - idade

  console.log("ano de nascimento: ", anoNascimento)

  console.log("--------------------")

  let imc = peso / (altura * altura)

  if (imc < 18.5) {
    console.log("Resultado IMC: Magreza")
  } else if (imc < 24.9) {
    console.log("Resultado do IMC: Normal")
  } else if (imc < 30) {
    console.log("Resultado IMC: Sobrepeso")
  } else {
    console.log("Resultado IMC: Obesidade")
  }

  console.log("--------------------")

  let contador = 0
  let anosVividos = anoNascimento

  while (anosVividos <= 2023) {
    console.log(`${anosVividos} - ${contador} anos de idade`)
    anosVividos++
    contador++
  }

  let desejaContinuar = parseInt(prompt(
    "Deseja inserir novos dados? (1) para Continuar ou (2) para Finalizar"
  ))

  if (desejaContinuar === 1) {
    continuar = 1;
  } else {
    continuar = 2;
  }
}
