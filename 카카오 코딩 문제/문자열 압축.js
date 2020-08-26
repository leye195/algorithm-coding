/**
 * 자를수 있는 최대 step의 단위는 s.length/2, 최소 단위는 1
 */
const solution = (s) => {
  let answer = s.length;
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let step = i,
      tmp = "",
      cnt = 1;
    for (let j = 0; j < s.length; j += step) {
      const s1 = s.slice(j, j + step),
        s2 = s.slice(j + step, j + step * 2);
      if (s1 === s2) {
        cnt += 1;
      } else {
        tmp = cnt > 1 ? tmp + `${cnt}${s1}` : tmp + `${s1}`;
        cnt = 1;
      }
    }
    answer = Math.min(answer, tmp.length);
  }
  return answer;
};
solution("abcde");
solution("aabbaccc");
solution("ababcdcdababcdcd");
solution("abcabcdede");
solution("abcabcabcabcdededededede");
solution("xababcdcdababcdcd");
