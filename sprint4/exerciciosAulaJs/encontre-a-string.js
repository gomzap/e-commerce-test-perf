const filme = {
  titulo: "Duna 2",
  ano: 2024,
  diretor: "Denis",
  personagem: "Lisan Al Gaib",
};

exibirPropriedades(filme);
function exibirPropriedades(obj) {
  for (prop in obj)
    if (typeof obj[prop] === "string") console.log(prop, obj[prop]);
}
