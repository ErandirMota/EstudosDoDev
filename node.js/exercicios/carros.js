
class Carro {

  constructor(marca, modelo, categoria, ano, quilometragem, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.categoria = categoria;
    this.ano = ano;
    this.quilometragem = quilometragem;
    this.valor = valor;
  }
}

function Get() {
  return fetch("https://apigenerator.dronahq.com/api/iZwJ89Ga/carros")
    .then((response) => response.json())
    .then((data) => console.log(data))
}

async function postData(
  url = "https://apigenerator.dronahq.com/api/iZwJ89Ga/carros",
  data = {}
) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
  return response.json()
}

postData("https://apigenerator.dronahq.com/api/iZwJ89Ga/carros", cep).then(
  (data) => {
    console.log(data)
  }
)

