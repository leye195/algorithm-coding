/**
 * 프로그래머스 카드게임 문제, dp 문제
 1.왼쪽이 오르쪽 보다 큰 경우 오른쪽 버림 right+1
 2.왼쪽만 버리는 경우 left+1
 3.양쪽다 버리는 걍우 left+1 right+1
 */
function solution(left, right) {
  let dp = [];
  for (let i = 0; i < left.length; i++) dp.push(left.map((v) => 0));
  function f(le, ri) {
    if (le === left.length || ri === right.length) return 0;
    if (dp[le][ri] !== 0) return dp[le][ri]; //
    dp[le][ri] = Math.max(f(le + 1, ri + 1), f(le + 1, ri));
    if (left[le] > right[ri])
      dp[le][ri] = Math.max(dp[le][ri], f(le, ri + 1) + right[ri]);
    return dp[le][ri];
  }
  return f(0, 0);
}
