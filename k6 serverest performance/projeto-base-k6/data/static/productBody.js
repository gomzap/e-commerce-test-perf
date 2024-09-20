export const createProductBody = () => {
  const productName = `Nome do produto ${Math.floor(
    Math.random() * 999999999999
  )}`;
  return {
    nome: productName,
    preco: 99,
    descricao: "descrição do produto",
    quantidade: 10,
  };
};
