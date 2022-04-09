/**
 * https://leetcode.com/problems/number-of-1-bits
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  let cnt = 0;

  for (let i = 1; i < 33; i++) {
    if (n & (1 << i)) {
      cnt++;
    }
  }

  return cnt;
};
