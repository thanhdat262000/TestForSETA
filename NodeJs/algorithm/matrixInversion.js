function matrixInversion(matrix) {
  matrix.reverse();
  matrix.map((array) => array.reverse());
  return matrix;
}
console.log(
  matrixInversion([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
  ])
);
// Anothr way to solve this problem is to use math.js
// const matrix = math.inv(matrix)

module.exports = matrixInversion;
