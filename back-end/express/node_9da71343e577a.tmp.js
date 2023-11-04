const express = require('express');
const app = express();

app.use(express.json());

app.get('alunos', (entrada, saida) => {
  console.log('entrou no alunos');
})

app.listen(3000, () => {
  console.log('Iniciei meu servidor')
});