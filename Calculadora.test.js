const Calculadora = require("./Calculadora");

describe("Testes da Calculadora", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  test("Deve somar dois numeros", () => {
    expect(calc.soma(2, 3)).toBe(5);
  });

  test("Deve subtrair dois numeros", () => {
    expect(calc.subtrai(5, 2)).toBe(3);
  });

  test("Deve multiplica dois numeros", () => {
    expect(calc.multiplica(3, 4)).toBe(12);
  });

  test("Deve divide dois numeros", () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  test("Deve lançar erro ao dividir por zero", () => {
    expect(() => calc.divide(10, 0)).toThrow("Divisão por zero não permitida");
  });

  test("Deve somar numeros negativos", () => {
    expect(calc.soma(-5, -3)).toBe(-8);
  });

  test("Deve dividir numeros fracionários", () => {
    expect(calc.divide(5, 2)).toBeCloseTo(2.5);
  });

  test("Deve mokar setTimeout para somar com delay", () => {
    jest.useFakeTimers();
    const callBack = jest.fn();
    calc.somaComDelay(2, 3, callBack);

    jest.advanceTimersByTime(1000);
    expect(callBack).toHaveBeenCalledWith(5);
  });
});
