// 처음에는 배열을 합쳐주면서 값을 찾는것으로 생각을 했다.
// 문제를 다시 보니 "만약 1번↔2번 끼리 겨루는 게임에서 2번이 승리했다면 다음 라운드에서 1번을 부여받고, 3번↔4번에서 겨루는 게임에서 3번이 승리했다면 다음 라운드에서 2번을 부여받게 됩니다"
// 라는 조건을 충족시키기 위해 (n+1)/2 을 활용

// 첫시도: 73.5/100 재첨으로 실패...
function solution(n, a, b) {
  let answer = 1;
  let matchList = [],
    newMatch = [];
  if (n === 2) return 1;
  for (let i = 1; i <= n; i += 2) {
    if (a === i && b == i + 1) return 1;
    matchList.push([i, i + 1]);
  }
  while (matchList.length < n) {
    if (matchList.length >= 2) {
      let le = matchList.shift(),
        ri = matchList.shift();
      const tmp = le.concat(ri);
      if (tmp.includes(a) && tmp.includes(b)) {
        break;
      }
      newMatch.push(tmp);
    }
    if (matchList.length === 0) {
      matchList = newMatch;
      newMatch = [];
      answer += 1;
    }
  }
  return answer + 1;
}
//통과
function solution2(n, a, b) {
  let answer = 0;
  while (a != b) {
    a = parseInt((a + 1) / 2);
    b = parseInt((b + 1) / 2);
    answer += 1;
  }
  return answer;
}
