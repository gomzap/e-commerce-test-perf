verificarVelicidade(70);

function verificarVelicidade(velocidade) {
  const velocidadeMaxima = 70;
  const KmPorPonto = 5;
  if (Velocidade <= velocidadeMaxima) console.log("Ok");
  else {
    const pontos = Math.floor((velocidade - velocidadeMaxima) / KmPorPonto);
    if (pontos >= 12) console.log("Carteira suspensa");
    else console.log("Pontos", pontos);
  }
}
