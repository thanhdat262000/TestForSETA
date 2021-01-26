const sumOfTop2 = require("./problem2.js");
test("First test", () => {
  expect(sumOfTop2([1, 4, 2, 3, 5])).toBe(9);
});

test("Second test", () => {
  expect(sumOfTop2([112, 43, 2, 32, 54, 3, 4, 92, 42, 20, 99])).toBe(211);
});

test("Third test", () => {
  expect(
    sumOfTop2([1, 26, 28, 75, 54, 100, 32, 17, 45, 65, 67, 74, 2, 1002])
  ).toBe(1102);
});

test("Fourth test", () => {
  expect(
    sumOfTop2([
      20342,
      4456,
      2334,
      453453,
      235,
      234,
      2343,
      7674,
      4687,
      23,
      76,
      56,
      7887,
      234,
      432,
      234,
      965,
      570,
      908,
    ])
  ).toBe(473795);
});
