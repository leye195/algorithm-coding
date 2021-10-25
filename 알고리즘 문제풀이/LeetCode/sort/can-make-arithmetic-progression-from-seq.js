/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  let prev = null;
  arr.sort((x, y) => x - y);
  for (let i = 1; i < arr.length; i++) {
    if (!prev) prev = arr[i] - arr[i - 1];
    else if (arr[i] - arr[i - 1] !== prev) return false;
  }
  return true;
};
