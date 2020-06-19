/**
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

1. 문자열의 첫 문자가 알파벳인경우 첫 문자를 대문자로 변환
2. 문자열의 첫 문자가 알파벳이 아닌경우 다음 문자가 알파벳인지 체크
- 2.1 알파벳일 경우 소문자로 변환
- 2.2 알파벳이 아닐 경우 그냥 둠 
*/
function solution(s) {
  let answer = [],
    tmp = s.split(" ");
  for (let i = 0; i < tmp.length; i++) {
    if (
      (tmp[i].charCodeAt(0) >= 97 && tmp[i].charCodeAt(0) <= 122) ||
      (tmp[i].charCodeAt(0) >= 65 && tmp[i].charCodeAt(0) <= 90)
    ) {
      answer.push(tmp[i][0].toUpperCase() + tmp[i].slice(1).toLowerCase());
    } else {
      if (
        (tmp[i].charCodeAt(1) >= 97 && tmp[i].charCodeAt(1) <= 122) ||
        (tmp[i].charCodeAt(1) >= 65 && tmp[i].charCodeAt(1) <= 90)
      ) {
        answer.push(tmp[i][0] + tmp[i][1].toLowerCase() + tmp[i].slice(2));
      } else {
        answer.push(tmp[i]);
      }
    }
  }
  return answer.join(" ");
}
