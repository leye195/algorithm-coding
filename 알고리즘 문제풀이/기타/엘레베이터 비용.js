function solution(money, cost) {
  let answer = -1;
  for (let i = 0; i < cost.length; i++) {
    let remains = money;
    let count = 0;
    for (let j = i; j < cost.length; j++) {
      if (remains - cost[j] >= 0) {
        remains -= cost[j];
        count += 1;
      } else {
        break;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}
