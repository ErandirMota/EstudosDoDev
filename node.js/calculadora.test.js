const calculadora = require("./calculadora")

test('Somar um mais um é igual a dois', () => {
  expect(calculadora.somar(1, 1)).toBe(2);
});
test('Subtrair um mais um é igual a dois', () => {
  expect(calculadora.subtrair(1, 1)).toBe(0);
});
test('Multiplicar um mais um é igual a dois', () => {
  expect(calculadora.multiplicar(4, 2)).toBe(1);
});
test('Dividir um mais um é igual a dois', () => {
  expect(calculadora.dividir(1, 1)).toBe(2);
});