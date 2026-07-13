const calcularPedido = require("../src/calcularPedido");

test("Aplica 10% de desconto corretamente", () => {
  expect(calcularPedido(100, 10)).toBe(90);
});

test("Sem desconto retorna o mesmo valor", () => {
  expect(calcularPedido(100, 0)).toBe(100);
});

test("Aplica 50% de desconto corretamente", () => {
  expect(calcularPedido(200, 50)).toBe(100);
});