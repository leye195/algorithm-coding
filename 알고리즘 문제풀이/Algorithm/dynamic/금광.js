/**
 * a[i][j]= max(a[i-1][j],a[i-1][j-1],a[i+1][j-1])+k[i][j]
 */

const solution = (n, m, arr) => {
  let ans = 0;
  const dp = [];
  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < m; j++) {
      if (j === 0) tmp.push(arr[i][j]);
      else tmp.push(0);
    }
    dp.push(tmp);
  }

  for (let j = 1; j < m; j++) {
    for (let i = 0; i < n; i++) {
      if (i - 1 >= 0 && j - 1 >= 0) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + arr[i][j]);
      }
      if (j - 1 >= 0) {
        dp[i][j] = Math.max(dp[i][j], dp[i][j - 1] + arr[i][j]);
      }
      if (i + 1 < n && j - 1 >= 0) {
        dp[i][j] = Math.max(dp[i][j], dp[i + 1][j - 1] + arr[i][j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dp[i][m - 1]);
  }
  return ans;
};

console.log(
  solution(3, 4, [
    [1, 3, 3, 2],
    [2, 1, 4, 1],
    [0, 6, 4, 7],
  ])
);

console.log(
  solution(4, 4, [
    [1, 3, 1, 5],
    [2, 2, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 1, 2],
  ])
);
