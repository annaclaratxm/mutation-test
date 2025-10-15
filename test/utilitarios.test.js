const Utilitarios = require('../src/utilitarios');

describe('Utilitarios', () => {
  const utilitarios = new Utilitarios();

  test('inverterString', () => {
    expect(utilitarios.inverterString('abc')).toBe('cba');
  });

  test('contarCaracteres', () => {
    expect(utilitarios.contarCaracteres('abc')).toBe(3);
  });

  test('paraMaiusculas', () => {
    expect(utilitarios.paraMaiusculas('abc')).toBe('ABC');
  });

  test('paraMinusculas', () => {
    expect(utilitarios.paraMinusculas('ABC')).toBe('abc');
  });

  test('primeiraLetraMaiuscula', () => {
    expect(utilitarios.primeiraLetraMaiuscula('abc')).toBe('Abc');
  });

  test('somar', () => {
    expect(utilitarios.somar(1, 2)).toBe(3);
  });

  test('subtrair', () => {
    expect(utilitarios.subtrair(2, 1)).toBe(1);
  });

  test('multiplicar', () => {
    expect(utilitarios.multiplicar(2, 3)).toBe(6);
  });

  test('dividir', () => {
    expect(utilitarios.dividir(6, 3)).toBe(2);
    expect(() => utilitarios.dividir(1, 0)).toThrow('Divisão por zero');
  });

  test('ehPar', () => {
    expect(utilitarios.ehPar(2)).toBe(true);
    expect(utilitarios.ehPar(3)).toBe(false);
  });

  test('primeiroElemento', () => {
    expect(utilitarios.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test('ultimoElemento', () => {
    expect(utilitarios.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test('tamanhoArray', () => {
    expect(utilitarios.tamanhoArray([1, 2, 3])).toBe(3);
  });

  test('ordenarArray', () => {
    expect(utilitarios.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('inverterArray', () => {
    expect(utilitarios.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('ehNumero', () => {
    expect(utilitarios.ehNumero(1)).toBe(true);
    expect(utilitarios.ehNumero('a')).toBe(false);
  });

  test('removerEspacos', () => {
    expect(utilitarios.removerEspacos(' a b ')).toBe('a b');
  });

  test('repetirTexto', () => {
    expect(utilitarios.repetirTexto('a', 3)).toBe('aaa');
  });

  test('juntarArray', () => {
    expect(utilitarios.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
  });

  test('contarPalavras', () => {
    expect(utilitarios.contarPalavras('a b c')).toBe(3);
  });

  test('mediaArray', () => {
    expect(utilitarios.mediaArray([1, 2, 3])).toBe(2);
    expect(utilitarios.mediaArray([])).toBe(0);
  });

  test('removerDuplicados', () => {
    expect(utilitarios.removerDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('ehPalindromo', () => {
    expect(utilitarios.ehPalindromo('arara')).toBe(true);
    expect(utilitarios.ehPalindromo('bola')).toBe(false);
  });

  test('mesclarObjetos', () => {
    expect(utilitarios.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});
