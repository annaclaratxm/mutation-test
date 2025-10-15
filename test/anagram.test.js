const { isAnagram } = require("../src/anagram");

test("Validando anagrama válido", async () => {
  expect(isAnagram("satc", "ctas")).toBeTruthy();
});

test("Validando anagrama inválido", async () => {
  expect(isAnagram("satc", "testes")).toBeFalsy();
});

test("Validando anagrama com letras maiúsculas e minúsculas", () => {
  expect(isAnagram("Listen", "Silent")).toBeTruthy();
});

test("Validando anagrama com caracteres especiais", () => {
  expect(isAnagram("Debit card", "Bad credit")).toBeTruthy();
});
