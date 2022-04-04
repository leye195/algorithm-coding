/**
 * https://leetcode.com/problems/power-of-four
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
  return Number.isInteger(Math.log(n) / Math.log(4));
};
