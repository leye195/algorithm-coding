/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber1 = function (n) {
  let lo = 0;
  let hi = n;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    const guessResult = guess(mid);

    if (guessResult > 0) lo = mid + 1;
    else hi = mid;
  }
  return lo;
};

var guessNumber2 = function (n) {
  let lo = 0;
  let hi = n;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const guessResult = guess(mid);

    if (guessResult === 0) return mid;
    else if (guessResult > 0) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
};
