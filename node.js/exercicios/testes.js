function calcularGastoCombustivel(distancia, tipoCombustivel) {

  if (distancia <= 0 || typeof distancia !== "number") {
    return "A distância precisa ser um número positivo.";
  }

  let eficiencia
  if (tipoCombustivel === "gasolina") {
    eficiencia = 16;
  } else if (tipoCombustivel === "etanol") {
    eficiencia = 11;
  } else {
    return "Tipo de combustível inválido. Use 'gasolina' ou 'etanol'.";
  }

  const litrosNecessarios = distancia / 1000 / eficiencia;

  return Math.ceil(litrosNecessarios);
}
