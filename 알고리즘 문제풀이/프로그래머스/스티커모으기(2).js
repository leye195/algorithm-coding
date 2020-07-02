//스티커 한 장을 뜯어내면 양쪽으로 인접해있는 스티커는 찢어져서 사용할 수 없게 됩니다
// - 0번째 부터 시작할 경우
// - 1번째 부터 시작할 경우
function solution(sticker) {
  let answer = 0,
    dp = [new Array(sticker.length).fill(0), new Array(sticker.length).fill(0)];
  if (sticker.length === 1) return sticker[0];
  dp[0][0] = sticker[0];
  dp[1][1] = sticker[1];
  for (let i = 2; i < sticker.length - 1; i++)
    dp[0][i] = Math.max(dp[0][i - 1], dp[0][i - 2] + sticker[i]);
  for (let i = 2; i < sticker.length; i++)
    dp[1][i] = Math.max(dp[1][i - 1], dp[1][i - 2] + sticker[i]);
  return Math.max(dp[0][sticker.length - 2], dp[1][sticker.length - 1]);
}
