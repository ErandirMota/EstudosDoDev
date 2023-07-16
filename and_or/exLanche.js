let pergunta = prompt("Você está com fome? Digite (1) para sim ou (2) não está");

let temDinheiro = prompt("Você tem dinheiro? Digite (1) para sim ou (2) para não");

if (pergunta == 1 && temDinheiro == 1) {
  console.log("Nós recomendamos a lanchonete chamada Lanche DaPraça.");
} else if (pergunta == 2 || temDinheiro == 2) {
  console.log("É melhor você comer em casa!");
}