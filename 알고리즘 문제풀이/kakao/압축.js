/**
길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
단계 2로 돌아간다.
 */
function initDictionary() {
  let obj = {},
    ch = 65;
  for (let i = 1; i <= 26; i++) {
    obj[String.fromCharCode(ch)] = i;
    ch += 1;
  }
  return obj;
}
function solution(msg) {
  let answer = [],
    idx = 0,
    d = initDictionary();
  while (idx < msg.length) {
    let w = "",
      c = "";
    for (let i = idx; i < msg.length; i++) {
      if (Object.keys(d).indexOf(w + msg[i]) === -1) {
        c = msg[i];
        idx = i;
        break;
      }
      w += msg[i];
      idx += 1;
    }
    if (c !== "") d[w + c] = Object.keys(d).length + 1;
    answer.push(d[w]);
  }
  return answer;
}
console.log(solution("KAKAO"));
