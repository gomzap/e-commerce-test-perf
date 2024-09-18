export const createProductBody = () => {
  const productName = `Produto ${Math.floor(Math.random() * 9999999)}`;
  return {
    nome: productName,
    preco: 99,
    descricao: "descrição do produto",
    quantidade: 10,
  };
};
