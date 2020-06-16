/*
1.1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
2.마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
3.앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
4.이전에 등장했던 단어는 사용할 수 없습니다.
5.한 글자인 단어는 인정되지 않습니다.
*/
function solution(n, words) {
  let turn = 0,
    number = 0,
    w = "",
    obj = {};
  for (let i = 0; i < words.length; i++) {
    if (obj[words[i]] === undefined) obj[words[i]] = 1;
  }
  for (let i = 0; i < words.length; i++) {
    if (turn === 0) number = number + 1;
    if (w === "") w = words[i];
    else if (obj[words[i]] === 1 && w[w.length - 1] === words[i][0])
      w = words[i];
    else if (w[w.length - 1] !== words[i][0] || obj[words[i]] === 0)
      return [turn + 1, number];
    turn = (turn + 1) % n;
    obj[words[i]] = 0;
  }
  return [0, 0];
}
