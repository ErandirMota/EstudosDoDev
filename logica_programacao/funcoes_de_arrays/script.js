let teste = [1, 2, 0, 5, 2];
console.log(teste);

// push
teste.push(6); // Adiciona um número no final do array

// pop
teste.pop() // Retira um número do array

// indexOf
teste.indexOf(0); // Retorna a posição que o número desejado está

// Includes
teste.includes(2); // Retorna true ou false se existi no array

// forEach - Para cada (elemento)
teste.forEach(x => console.log(x)); // Passa por todo o array e mostra

// Filter
let filtrado = teste.filter(elemento => elemento >= 2); // filtra o número

// OrderBy
teste.sort(); // Ajusta em ordem crescente o array