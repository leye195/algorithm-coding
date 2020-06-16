//한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
function solution(people, limit) {
  let answer = 0,
    le = 0,
    ri = people.length - 1;
  people.sort((x, y) => (x > y ? 1 : x === y ? 0 : -1));
  while (le < ri) {
    if (people[le] + people[ri] <= limit) {
      le++;
      ri--;
    } else {
      ri--;
    }
    answer += 1;
  }
  return le === ri ? answer + 1 : answer;
}
