let cinto = prompt("Você está usando cinto de segurança? (1) sim ou (2) não");
let alcoolizado = prompt("Você está alcoolizado? (1) sim ou (2) não");
let semaforo = prompt("O semáforo está verde? (1) sim ou (2) não");

if (cinto == 1 && alcoolizado == 2 && semaforo == 1) {
  console.log("Você pode prosseguir!");
} else {
  console.log("Você não pode prosseguir!")
}