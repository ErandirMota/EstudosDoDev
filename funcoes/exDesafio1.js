function SomarNumeros(a, b) {
  return a + b
}

function SubtrairNumeros(a, b) {
  return a - b
}

function MultiplicarNumeros(a, b) {
  return a * b
}

function DividirNumeros(a, b) {
  return a / b
}

let contador = 0
let continuar = true
let resultado = []

while (continuar) {
  let a = Number(prompt("Digite um número: "))
  let b = Number(prompt("Digite outro número: "))

  let operacao = parseInt(
    prompt(
      "Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
    )
  )

  let resultadoOperacao
  switch (operacao) {
    case 1:
      resultadoOperacao = SomarNumeros(a, b)
      break
    case 2:
      resultadoOperacao = SubtrairNumeros(a, b)
      break
    case 3:
      resultadoOperacao = MultiplicarNumeros(a, b)
      break
    case 4:
      resultadoOperacao = DividirNumeros(a, b)
      break
    default:
      console.log("Operação inválida!")
      break
  }

  resultado[contador] = resultadoOperacao
  contador++
  console.log(`O resultado da operação é: ${resultadoOperacao}`)

  continuar = prompt("Deseja realizar outra operação? (s) sim ou (n) não")
}

function exibirHistorico() {
  console.log("Histórico dos resultados: ")

  for (let i = 0; i < resultado.length; i++) {
    console.log(`Resultado ${i}: ${resultado[i]}`)
  }
}

exibirHistorico()
