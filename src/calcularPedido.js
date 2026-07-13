// Gerado com o prompt do GitHub Copilot:
// "Crie uma função JavaScript que calcule o valor final de um pedido aplicando um desconto percentual."

function calcularPedido(total, desconto) {
  return total - (total * desconto / 100);
}

module.exports = calcularPedido;
