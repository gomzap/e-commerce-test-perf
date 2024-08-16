export default class Calculadora {
  static soma(a, b) {
    return a + b;
  }

  static subtracao(a, b) {
    return a - b;
  }

  static multiplicacao(a, b) {
    return a * b;
  }

  static divisao(a, b) {
    return a / b;
  }

  static potencia(a, b) {
    return a ** b;
  }

  static resto(a, b) {
    //Retorna o restante da divisão em números inteiros do número da esquerda pelo número da direita.
    return a % b;
  }
}
