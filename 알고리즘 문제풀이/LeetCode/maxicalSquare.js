/**
 * https://leetcode.com/problems/maximal-square/
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  let ans = 0;
  const dp = [];
  const n = matrix.length;
  const m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < m; j++) {
      tmp.push(+matrix[i][j]);
    }
    dp.push(tmp);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i !== 0 && j !== 0 && +matrix[i][j] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
      ans = Math.max(ans, dp[i][j] * dp[i][j]);
    }
  }

  return ans;
};
