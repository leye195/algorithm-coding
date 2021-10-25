/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr
    .map((num) => [
      num,
      [...num.toString(2)].filter((n) => +n !== 0).reduce((x) => x + 1, 0),
    ])
    .sort((x, y) => (x[1] === y[1] ? x[0] - y[0] : x[1] - y[1]))
    .map((num) => num[0]);
};
