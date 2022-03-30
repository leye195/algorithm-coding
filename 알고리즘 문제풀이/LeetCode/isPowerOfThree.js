/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let ans = 1;
  while (1) {
    if (ans === n) return true;
    if (ans > n) break;

    ans *= 3;
  }
  return false;
};
