/*
1.마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
2.completion의 길이는 participant의 길이보다 1 작습니다.
3.참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
4.참가자 중에는 동명이인이 있을 수 있습니다.
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
*/
function solution(participant, completion) {
  let obj = {};
  for (let i = 0; i < participant.length; i++) {
    if (obj[participant[i]] === undefined) obj[participant[i]] = 1;
    else obj[participant[i]] += 1;
  }
  completion.map((name) => (obj[name] -= 1));
  return Object.entries(obj).filter((name) => name[1] > 0)[0][0];
}
