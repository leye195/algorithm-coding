/**
 * https://leetcode.com/problems/integer-break/
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
  let ans = 0;
  const backtrack = (total, num, arr) => {
    if (total === n) {
      const product = arr.reduce((acc, num) => acc * num, 1);
      ans = Math.max(ans, product);
      return;
    }

    if (total > n) {
      return;
    }

    for (let i = num; i > 0; i--) {
      backtrack(total + i, i, [...arr, i]);
    }
  };

  for (let i = n - 1; i > 0; i--) {
    backtrack(i, i, [i]);
  }
  return ans;
};
