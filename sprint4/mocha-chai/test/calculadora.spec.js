import assert from "assert";
import { expect } from "chai";
import Calculadora from "../src/calculadora.js";

describe("Testes de soma", () => {
  it("Deve somar 4 e 5 resultando em 9", () => {
    let resultado = Calculadora.soma(4, 5);
    expect(resultado).to.be.eq(9);
  });
  it("Deve somar -4 e 5 resultando em 1", () => {
    let resultado = Calculadora.soma(-4, 5);
    expect(resultado).to.be.eq(1);
  });
  it("Deve somar 500 e 500 resultando em 1000", () => {
    let resultado = Calculadora.soma(500, 500);
    expect(resultado).to.be.eq(1000);
  });
  it("Deve somar -10 e 5 resultando em -5", () => {
    let resultado = Calculadora.soma(-10, 5);
    expect(resultado).to.be.eq(-5);
  });
  it("Deve somar -123 e -543 resultando em -666", () => {
    let resultado = Calculadora.soma(-123, -543);
    expect(resultado).to.be.eq(-666);
  });
});

describe("Testes de subtração", () => {
  it("Deve subtrair 4 e 5 resultando em -1", () => {
    let resultado = Calculadora.subtracao(4, 5);
    expect(resultado).to.be.eq(-1);
  });
  it("Deve subtrair 100 e 60 resultando em 40", () => {
    let resultado = Calculadora.subtracao(100, 60);
    expect(resultado).to.be.eq(40);
  });
  it("Deve subtrair -50 e 33 resultando em -83", () => {
    let resultado = Calculadora.subtracao(-50, 33);
    expect(resultado).to.be.eq(-83);
  });
  it("Deve subtrair 8496934 e 982387 resultando em 7514547", () => {
    let resultado = Calculadora.subtracao(8496934, 982387);
    expect(resultado).to.be.eq(7514547);
  });
});

describe("Testes de multiplicação", () => {
  it("Deve multiplicar 5 e 5 resultando em 25", () => {
    let resultado = Calculadora.multiplicacao(5, 5);
    expect(resultado).to.be.eq(25);
  });
  it("Deve multiplicar 2 e 0 resultando em 0", () => {
    let resultado = Calculadora.multiplicacao(2, 0);
    expect(resultado).to.be.eq(0);
  });
  it("Deve multiplicar 9 e 1 resultando em 9", () => {
    let resultado = Calculadora.multiplicacao(9, 1);
    expect(resultado).to.be.eq(9);
  });
  it("Deve multiplicar 11 e 11111 resultando em 122221", () => {
    let resultado = Calculadora.multiplicacao(11, 11111);
    expect(resultado).to.be.eq(122221);
  });
  it("Deve multiplicar -5 e 2 resultando em -10", () => {
    let resultado = Calculadora.multiplicacao(-5, 2);
    expect(resultado).to.be.eq(-10);
  });
  it("Deve multiplicar -9 e -9 resultando em 81", () => {
    let resultado = Calculadora.multiplicacao(9, 9);
    expect(resultado).to.be.eq(81);
  });
});

describe("Testes de divisão", () => {
  it("Deve dividir 8 e 2 resultando em 4", () => {
    let resultado = Calculadora.divisao(8, 2);
    expect(resultado).to.be.eq(4);
  });
  it("Deve dividir 20 e 3 resultando em 6.6", () => {
    let resultado = Calculadora.divisao(20, 3);
    expect(resultado).to.be.eq(6.666666666666667);
  });
  it("Deve dividir 84965 e 24865 resultando em 3,417", () => {
    let resultado = Calculadora.divisao(84965, 24865);
    expect(resultado).to.be.eq(3.417052081238689);
  });
  it("Deve dividir 88 e 99 resultando em 0,88", () => {
    let resultado = Calculadora.divisao(88, 99);
    expect(resultado).to.be.eq(0.8888888888888888);
  });
});

describe("Testes de exponenciação", () => {
  it("Deve elevar a base 2 ao expoente 8 resultando em 256", () => {
    let resultado = Calculadora.potencia(2, 8);
    expect(resultado).to.be.eq(256);
  });
  it("Deve elevar a base 5 ao expoente 10 resultando em 9765625", () => {
    let resultado = Calculadora.potencia(5, 10);
    expect(resultado).to.be.eq(9765625);
  });
  it("Deve elevar a base 8 ao expoente 1 resultando em 8", () => {
    let resultado = Calculadora.potencia(8, 1);
    expect(resultado).to.be.eq(8);
  });
  it("Deve elevar a base 4 ao expoente 0 resultando em 0", () => {
    let resultado = Calculadora.potencia(4, 0);
    expect(resultado).to.be.eq(1);
  });
  it("Deve elevar a base -3 ao expoente 3 resultando em -27", () => {
    let resultado = Calculadora.potencia(-3, 3);
    expect(resultado).to.be.eq(-27);
  });
  it("Deve elevar a base 2 ao expoente -3 resultando em 0.125", () => {
    let resultado = Calculadora.potencia(2, -3);
    expect(resultado).to.be.eq(0.125);
  });
  it("Deve elevar a base 3 ao expoente 2.5 resultando em 15.588457268119896", () => {
    let resultado = Calculadora.potencia(3, 2.5);
    expect(resultado).to.be.eq(15.588457268119896);
  });
});

describe("Testes de restante", () => {
  it("Deve retornar o restante da divisão 15 por 2 resultando em 1", () => {
    let resultado = Calculadora.resto(15, 2);
    expect(resultado).to.be.eq(1);
  });
  it("Deve retornar o restante da divisão 20 por 3 resultando em 2", () => {
    let resultado = Calculadora.resto(20, 3);
    expect(resultado).to.be.eq(2);
  });
});
