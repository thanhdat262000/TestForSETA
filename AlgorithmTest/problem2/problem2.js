function sumOfTop2(array) {
  array.sort((a, b) => a - b);
  return array[array.length - 1] + array[array.length - 2];
}
module.exports = sumOfTop2;
