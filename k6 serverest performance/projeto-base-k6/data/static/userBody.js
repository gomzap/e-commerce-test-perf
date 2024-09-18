export const createUserBody = () => {
  const email = `${Date.now()}@qa.com`;
  return {
    nome: "TesterTester",
    email: email,
    password: "testing",
    administrador: "true",
  };
};
