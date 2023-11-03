async function TesteAsync() {
  console.log('Iniciando');
  try {
    let example = fetch('http://httpbin.org/get');
    console.log(example);
    console.log('Terminou a requisição');
  } catch (error) {
    console.log('caiu no catch');
    console.log(error);
  }
}

function Teste() {
  console.log('Iniciando');

  let example = fetch('http://httpbin.org/get').then((res) => {
    console.log('aqui tá dentro do then');
    console.log(res);
  }).catch((err) => {
    console.log('aqui tá dentro do catch');
    console.log(err);
  });

  console.log(example);

  console.log('depois da chamada');
}