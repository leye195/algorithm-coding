/**
 소수 찾기 (완전 탐색)
 백트랙, 에라토스테네스의 체 활용 
 1.에라토스테네스의 체를 활용해 소수 리스트 구한다.
 2.백트랙을 활용해 모든 조합을 탐색(중복 제외)
 3.조합에 있는 수 중 소수값만 카운트해서 리턴
*/
function backtrack(r, w, numbers, visited, cnt) {
  if (w.length === numbers.length) return;
  for (let i = 0; i < numbers.length; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      if (!r.includes(parseInt(w + numbers[i])))
        r.push(parseInt(w + numbers[i]));
      backtrack(r, w + numbers[i], numbers, visited, cnt + 1);
      visited[i] = 0;
    }
  }
  return;
}
function solution(numbers) {
  let answer = 0,
    visited = new Array(numbers.length).fill(0);
  let primeList = new Array(1000000).fill(0),
    tmp = [];
  primeList[0] = 1;
  primeList[1] = 1;

  //1.소수 구하기
  for (let i = 2; i <= Math.sqrt(999999); i++) {
    if (primeList[i] !== 1) {
      for (let j = 2 * i; j <= 999999; j += i) {
        if (primeList[j] == 0) primeList[j] = 1;
      }
    } else {
      continue;
    }
  }
  //2.완전 탐색 진행 중복되지 않는 모든 조합 추출
  for (let i = 0; i < numbers.length; i++) {
    visited[i] = 1;
    if (!tmp.includes(parseInt(numbers[i]))) tmp.push(parseInt(numbers[i]));
    backtrack(tmp, numbers[i], numbers, visited, 1);
    visited[i] = 0;
  }
  //3.소수 값 만 count
  tmp.forEach((n) => {
    if (primeList[n] === 0) answer += 1;
  });
  return answer;
}
