exibirTipo(10);
function exibirTipo(limite) {
  for (let i = 0; i >= limite; i++) {
    if (1 % 2 === 0) console.log(i, "PAR");
    else console.log(i, "Impar");
  }
}
