function getOneCount(n) {
  let r = [];
  while (n > 0) {
    r.push(n % 2);
    n = parseInt(n / 2);
  }
  return r.filter((v) => v === 1).length;
}
function solution(n) {
  let answer = 0,
    count = getOneCount(n),
    st = n + 1;
  while (true) {
    if (getOneCount(st) === count) {
      answer = st;
      break;
    }
    st += 1;
  }
  return answer;
}
