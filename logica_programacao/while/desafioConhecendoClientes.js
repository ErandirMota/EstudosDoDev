let nomeCliente = prompt("Digite o nome do cliente: ");
let idadeCliente= parseInt(prompt("Digite a idade do cliente: "));
let salarioAtual = parseFloat(prompt("Digite o salário atual do cliente: "));

console.log("Nome do cliente: ", nomeCliente);
console.log("Idade do cliente: ", idadeCliente);
console.log("Salário atual do cliente: ", salarioAtual);

let aumento = 0.015; // 1,5% de aumento no primeiro ano.

console.log("\nPrevisão Salarial para os próximos 10 anos: ");

for (let ano = 1; ano <= 10; ano++) {
  salarioAtual += salarioAtual * aumento;
  aumento *= 2; // O aumento dobra a cada ano.

  let salario = salarioAtual;
  let anoAtual = 2023 + ano;
  console.log(`${anoAtual} - R$ ${salario}`);
}
