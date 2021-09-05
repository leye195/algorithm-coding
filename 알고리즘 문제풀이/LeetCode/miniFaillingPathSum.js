/**
 * https://leetcode.com/problems/minimum-falling-path-sum/submissions/
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = function (matrix) {
  const dp = new Array(matrix.length).fill([]);
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [...matrix[i]];
  }
  for (i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j === 0)
        dp[i][j] = Math.min(
          dp[i][j] + dp[i - 1][j],
          dp[i][j] + dp[i - 1][j + 1]
        );
      if (j === matrix.length - 1)
        dp[i][j] = Math.min(
          dp[i][j] + dp[i - 1][j],
          dp[i][j] + dp[i - 1][j - 1]
        );
      if (j > 0 && j < matrix.length - 1)
        dp[i][j] = Math.min(
          dp[i][j] + dp[i - 1][j],
          dp[i][j] + dp[i - 1][j - 1],
          dp[i][j] + dp[i - 1][j + 1]
        );
    }
  }
  return Math.min(...dp[matrix.length - 1]);
};

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
);
console.log(
  minFallingPathSum([
    [-19, 57],
    [-40, -4],
  ])
);
console.log(minFallingPathSum([[-48]]));
