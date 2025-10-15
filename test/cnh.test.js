const { obterCnh } = require("../src/cnh");

test("Validando CNH com idade 21 anos", async () => {
  expect(obterCnh(21)).toBeTruthy();
});

test("Validando CNH com idade 17 anos", async () => {
  expect(obterCnh(17)).toBeFalsy();
});

test("Validando CNH com idade 18 anos", async () => {
  expect(obterCnh(18)).toBeTruthy();
});
