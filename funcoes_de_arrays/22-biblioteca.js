// Arrays para guardar os dados dos livros
let titulos = ["livro1", "livro2", "livro3", "livro4"]
let autores = ["Jacob Petry", "Robert Kiyosak", "James Clear", "Dale Carnigie"]
let anos = [2015, 2012, 2016, 2014]
let idiomas = [
  ["ingles", "português"],
  ["português"],
  ["português", "inglês"],
  ["espanhol"],
]

// Função para buscar e exibir os livros de um autor
function buscarLivrosPorAutor(autor) {
  let livrosAutor = []

  for (let i = 0; i < autores.length; i++) {
    if (autor === autores[i]) {
      livrosAutor.push(titulos[i])
    }
  }

  if (livrosAutor.length > 0) {
    console.log(`Livros do autor ${autor}: `)
    console.log(livrosAutor)
  } else {
    console.log(`Nenhum livro encontrado do autor ${autor}`)
  }
}

// Função para buscar e exibir os livros de determinado ano
function buscarLivrosPorAno(ano) {
  let livrosAno = []

  for (let i = 0; i < anos.length; i++) {
    if (ano === anos[i]) {
      livrosAno.push(titulos[i])
    }
  }

  if (livrosAno.length > 0) {
    console.log(`Livros do ano ${ano}`)
  } else {
    console.log(`Nenhum livro encontrado do ano ${ano}`)
  }
}

// Função para buscar e exibir os livros de um autor a partir do ano
function buscarLivroPorAutorEAno(autor, ano) {
  let livrosAutorAno = []

  for (let i = 0; i < titulos.length; i++) {
    if (autores[i] === autor && anos[i] >= ano) {
      livrosAutorAno.push(titulos[i])
    }
  }

  if (livrosAutorAno.length > 0) {
    console.log(`Livros do autor ${autor} a partir do ano ${ano}: `)
    console.log(livrosAutorAno)
  } else {
    console.log(
      `Nnehum livro encontrado do autor ${autor} a partir do ano ${ano}`
    )
  }
}

// Função para exibir os livros de determinado idioma
function exibirLivrosPorIdioma(idioma) {
  let livrosIdioma = []

  for (let i = 0; i < idiomas.length; i++) {
    for (let j = 0; j < idiomas.length; j++) {
      if (idioma === idiomas[i][j]) {
        livrosIdioma.push(titulos[i]);
      }
    }
  }

  if (livrosIdioma.length > 0) {
    console.log(`Livros do idioma ${idioma}: `);
    console.log(livrosIdioma);
  } else {
    console.log(`Nenhum livro encontrado no idioma ${idioma}`);
  }
}

// Função para exibir os livros ordenados pelo ano
function exibirLivrosOrdernadosPorAno() {
  let titulosOrdenados = [];
  let autoresOrdenados = [];
  let anosOrdenados = [];
  let idiomasOrdenados = [];

  // Criar uma cópia dos arrays de títulos, autores, anos e idiomas
  let titulosCopia = titulos.slice();
  let autoresCopia = autores.slice();
  let anosCopia = anos.slice();
  let idiomasCopia = idiomas.slice();

  while (titulosCopia.length > 0) {
    let maiorAnoIndex = 0;

    // Encontrar o índice do menor ano
    for (let i = 1; i < anosCopia.length; i++) {
      if (anosCopia[i] > anosCopia[maiorAnoIndex]) {
        maiorAnoIndex = 1;
      }
    }

    titulosOrdenados.push(titulosCopia[maiorAnoIndex]);
    autoresOrdenados.push(autoresCopia[maiorAnoIndex]);
    anosOrdenados.push(anosCopia[maiorAnoIndex]);
    idiomasOrdenados.push(idiomasCopia[maiorAnoIndex]);

    // Remover o livro dos arrays de cópia
    titulosCopia.splice[maiorAnoIndex, 1];
    autoresCopia.splice(maiorAnoIndex, 1);
    anosCopia.splice(maiorAnoIndex, 1);
    idiomasCopia.splice(maiorAnoIndex, 1);
  }

  for (let i = 0; i < titulosOrdenados.length; i++) {
    console.log(titulosOrdenados[i], autoresOrdenados[i], anosOrdenados[i], idiomasOrdenados[i]);
  }
}
