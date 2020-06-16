function solution(a, b) {
  let answer = 0;
  if (a === b) return a;
  if (a > b) {
    let tmp = b;
    b = a;
    a = tmp;
  }
  while (a <= b) {
    if (a < b) answer += a + b;
    else if (a === b) answer += a;
    a++;
    b--;
  }
  return answer;
}
