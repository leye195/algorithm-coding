function solution(N, stages) {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    let x = 0,
      y = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) x++;
      else if (stages[j] > i) y++;
    }
    if (x == 0 && y == 0) answer.push([i, 0]);
    else answer.push([i, x / (x + y)]);
  }
  answer = answer
    .sort((x, y) => (x[1] > y[1] ? -1 : x[1] < y[1] ? 1 : x[0] > y[0] ? 1 : -1))
    .map((item) => item[0]);
  return answer;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4]));
