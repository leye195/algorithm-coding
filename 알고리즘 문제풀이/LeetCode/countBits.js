/**
 * https://leetcode.com/problems/counting-bits/
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    const len = Math.floor(Math.log(i) / Math.log(2)) + 1;
    let cnt = 0;

    for (let j = 0; j < len; j++) {
      const tmp = i & (1 << j);
      if (tmp) {
        cnt++;
      }
    }
    dp[i] = cnt;
  }

  return dp;
};
