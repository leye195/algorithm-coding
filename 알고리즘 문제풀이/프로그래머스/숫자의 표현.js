//자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return
function solution(n) {
  let answer = 1;
  for (let i = 1; i < n; i++) {
    let num = i;
    for (let j = i + 1; j < n; j++) {
      if (num >= n) {
        if (num === n) answer += 1;
        break;
      }
      num += j;
    }
  }
  return answer;
}
