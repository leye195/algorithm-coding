/** 
factorial 활용 문제
k/factorial(n-1) = idx 번째
k%factorial(n-1) ->

4%2 = 2 
2%1 = 0
0%1 = 0
*/
function getFactorial(n) {
  let r = 1;
  for (let i = 1; i < n + 1; i++) r *= i;
  return r;
}
function solution(n, k) {
  let answer = [],
    line = new Array(n).fill(0);
  for (let i = 0; i < n; i++) line[i] = i + 1;
  k--;
  while (n > 0) {
    const f = getFactorial(n - 1);
    const idx = Math.floor(k / f);
    k %= f;
    answer.push(line[idx]);
    line = line.filter((v) => v !== line[idx]);
    n--;
  }
  return answer;
}
