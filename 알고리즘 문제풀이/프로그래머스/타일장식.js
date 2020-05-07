/*
n은 1~80
dp[n]=dp[n-1]+dp[n-2]
n번째 둘래 합은 d[n]*2+(d[n]+d[n-1])*2
*/

function solution(N) {
  const dp = [1, 1];
  for (let i = 2; i < N; i++) dp.push(dp[i - 1] + dp[i - 2]);
  return dp[N - 1] * 2 + (dp[N - 1] + dp[N - 2]) * 2;
}
