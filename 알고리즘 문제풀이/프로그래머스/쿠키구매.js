function solution(cookie) {
  let answer = 0;
  for (let i = 0; i < cookie.length - 1; i++) {
    let le = i,
      ri = i + 1,
      sl = cookie[i],
      sr = cookie[i + 1];
    while (true) {
      if (sl === sr) answer = Math.max(answer, sl);
      if (le - 1 > 0 && sl < sr) {
        sl += cookie[sl - 1];
        le--;
      } else if (ri + 1 < cookie.length && sl > sr) {
        sr += cookie[sr + 1];
        ri++;
      } else break;
    }
  }
  return answer;
}
