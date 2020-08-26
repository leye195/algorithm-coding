/*
[링크] https://programmers.co.kr/learn/courses/30/lessons/67256
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락
두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락
*/
function solution(numbers, hand) {
  let answer = "",
    pad = {};
  let le = [3, 0],
    ri = [3, 2];
  for (let i = 0; i <= 9; i++) {
    if (i === 0 || i === 2 || i === 5 || i === 8) {
      if (i === 0) pad[i] = [3, 1];
      else if (i === 2) pad[i] = [0, 1];
      else if (i === 5) pad[i] = [1, 1];
      else if (i === 8) pad[i] = [2, 1];
    } else if (i === 1 || i === 4 || i === 7) {
      if (i === 1) pad[i] = [0, 0];
      else if (i === 4) pad[i] = [1, 0];
      else if (i === 7) pad[i] = [2, 0];
    } else if (i === 3 || i === 6 || i === 9) {
      if (i === 3) pad[i] = [0, 2];
      else if (i === 6) pad[i] = [1, 2];
      else if (i === 9) pad[i] = [2, 2];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      le = pad[numbers[i]];
      answer += "L";
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      ri = pad[numbers[i]];
      answer += "R";
    } else {
      const [x, y] = pad[numbers[i]];
      const d1 = Math.abs(le[0] - x) + Math.abs(le[1] - y);
      const d2 = Math.abs(ri[0] - x) + Math.abs(ri[1] - y);
      if (d1 === d2) {
        if (hand === "right") {
          answer += "R";
          ri = [x, y];
        } else if (hand === "left") {
          answer += "L";
          le = [x, y];
        }
      } else if (d1 > d2) {
        answer += "R";
        ri = [x, y];
      } else {
        answer += "L";
        le = [x, y];
      }
    }
  }
  return answer;
}
