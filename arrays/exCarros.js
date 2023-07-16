let modelos = [];
let anos = [];
let valores = [];


let contador = 0;
let continuar = true;

while (continuar) {
  let modelo = prompt("Digite o modelo do carro: ");
  let ano = parseInt(prompt("Digite o ano do carro: "));
  let valor = parseFloat(prompt("Digite o valor do carro: "));
  
  modelos[contador] = modelo;
  anos[contador] = ano;
  valores[contador] = valor;

  contador++;

  let desejaContinuar = parseInt(prompt("Você deseja continuar? (1) sim (2) não"));

  if (desejaContinuar === 2) {
    continuar = false;
  }
}
// Exibir informações no console
for (let i = 0; i < modelos.length; i++) {
  console.table(`modelo: ${modelos[i]} ano: ${anos[i]} valor: ${valores[i]}`);
}

// Odernar os preços do carros
for (let i = 0; i < valores.length - 1; i++) {
  for (let j = 0; j < valores.length - i - i; j++) {
    if (valores[j] > valores [j + 1]) {
      // Trocar de posição
      let maiorValor = valores[j];
      valores[j] = valores[j + 1];
      valores[j + 1] = maiorValor;

      var modeloMaiorValor = modelos[j];
      modelos[j] = modelos[j + 1];
      modelos[j + 1] = modeloMaiorValor;

      var anoMaiorValor = anos[j];
      anos[j] = anos[j + 1];
      anos[j + 1] = anoMaiorValor;
    }
  }
}

// Exibir informações pelo maior preço
console.log("Carros ordernaods de acordo com preço!");
for (let i = 0; i < modelos.length; i++) {
  console.table(`modelo: ${modelos[i]} ano: ${anos[i]} valor: ${valores[i]}`);
}