let idades = []
let alturas = []
let contador = 0
let somaAlturas = 0

for (let i = 1; i <= 5; i++) {
  let idade = parseInt(prompt(`Digite a Idade do ${i} aluno: `))
  let altura = parseFloat(prompt(`Agora digite a Altura do ${i} aluno: `))
  idades[contador] = idade
  alturas[contador] = altura
  contador++
  somaAlturas += altura
}

let mediaGeralAlturas = somaAlturas / 5

let alunosMaiorTreze = 0
for (let i = 0; i < idades.length; i++) {
  if (idades[i] > 13 && alturas[i] < mediaGeralAlturas) {
    alunosMaiorTreze++
  }
}

console.log(
  `Quantidade de alunos que satisfazem os requisitos: ${alunosMaiorTreze}`
)
