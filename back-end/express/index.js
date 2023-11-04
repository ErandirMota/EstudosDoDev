const express = require('express');
const app = express();

app.use(express.json());

// Responsável por pegar todos os alunos
app.get('/alunos', (req, res) => {
  console.log(req.query);
  console.log('entrou no alunos');
  res.status(200).send('deu certo');
});

// Responsavel por pegar um aluno
app.get("/alunos/:id/:outro", (req, res) => {
  console.log(req.params.id);
  console.log(req.params.outro);
  console.log("entrou no alunos")
  res.status(200).send("deu certo")
})

app.post('/alunos', (req, res) => {
  console.log(req.body);
  console.log('entrou no alunos');
  res.status(200).send(req.body);
});

app.listen(3000, () => {
  console.log('Iniciei meu servidor');
});