const maxStringLength = require("./problem1.js");
test("First test", () => {
  expect(maxStringLength(["a", "ab", "abc", "cd", "def", "gh"])).toEqual([
    "ab",
    "cd",
    "gh",
  ]);
});
test("Second test", () => {
  expect(
    maxStringLength([
      "sdf",
      "abs",
      "abc",
      "cd",
      "def",
      "gh",
      "sdf",
      "gf",
      "sdfg",
    ])
  ).toEqual(["sdf", "abs", "abc", "def", "sdf"]);
});
test("Third test", () => {
  expect(
    maxStringLength([
      "123",
      "54",
      "1",
      "c",
      "00",
      "39",
      "3",
      "4",
      "g",
      "dsad",
      "dfgjvlsdf",
      "dsafjdf",
    ])
  ).toEqual(["1", "c", "3", "4", "g"]);
});
test("Fourth test", () => {
  expect(
    maxStringLength([
      "abc",
      "cde",
      "fgh",
      "ijk",
      "lmn",
      "a",
      "12332",
      "aaaa",
      "d",
      "b",
    ])
  ).toEqual(["abc", "cde", "fgh", "ijk", "lmn"]);
});
