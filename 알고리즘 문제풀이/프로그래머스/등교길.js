//dp활용 문제,
//dp[i][j]가 -1로 웅덩이인 경우 dp[i][j]=0값을 치환
//i=0, 웅덩이가 아닐시 dp[0][j] = 1
//j=0, 웅덩이가 아닐시 dp[i][0] = 1
//dp[i][j] = dp[i-1][j]+dp[i][j-1]  % 1000000007;
function solution(m, n, puddles) {
  let dp = [];
  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < m; j++) tmp.push(0);
    dp.push(tmp);
  }
  for (let i = 0; i < puddles.length; i++)
    dp[puddles[i][1] - 1][puddles[i][0] - 1] = -1;
  dp[0][0] = 1;
  for (let i = 0; i < n; i++) {
    if (dp[i][0] !== -1) dp[i][0] = 1;
    else break;
  }
  for (let j = 0; j < m; j++) {
    if (dp[0][j] !== -1) dp[0][j] = 1;
    else break;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (dp[i][j] !== -1) {
        if (i > 0 && j > 0)
          dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
      } else dp[i][j] = 0;
    }
  }
  return dp[n - 1][m - 1];
}
console.log(solution(4, 3, [[2, 2]]));
console.log(
  solution(4, 3, [
    [1, 2],
    [2, 2],
  ])
);
