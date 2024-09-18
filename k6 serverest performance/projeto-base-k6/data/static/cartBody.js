export function createCartBody(productId) {
  return {
    produtos: [
      {
        idProduto: productId,
        quantidade: 10,
      },
    ],
  };
}
