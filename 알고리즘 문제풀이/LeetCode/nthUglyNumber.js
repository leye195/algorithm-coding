/**
 * https://leetcode.com/problems/ugly-number-ii/submissions/
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  let ans = new Set();
  const MAX_INT = 2 ** 31 - 1;
  for (let i = 1; i < MAX_INT; i *= 2) {
    for (let j = i; j < MAX_INT; j *= 3) {
      for (let k = j; k < MAX_INT; k *= 5) {
        ans.add(k);
      }
    }
  }
  ans = [...ans].sort((x, y) => x - y);
  return ans[n - 1];
};
