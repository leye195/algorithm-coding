/*
기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 합니다.
보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.
*/

const check = (frame) => {
  for (const v of frame) {
    const [x, y, a] = v;
    if (a === 0) {
      const c1 = frame.some((t) => [x, y, 1].every((v, i) => v === t[i])),
        c2 = frame.some((t) => [x - 1, y, 1].every((v, i) => v === t[i])),
        c3 = frame.some((t) => [x, y - 1, 0].every((v, i) => v === t[i]));
      if (y === 0 || c1 || c2 || c3) continue;
      else return false;
    } else if (a === 1) {
      const c1 = frame.some((t) => [x, y - 1, 0].every((v, i) => v === t[i]));
      const c2 = frame.some((t) =>
        [x + 1, y - 1, 0].every((v, i) => v === t[i])
      );
      const c3 = frame.some((t) => [x - 1, y, 1].every((v, i) => v === t[i]));
      const c4 = frame.some((t) => [x + 1, y, 1].every((v, i) => v === t[i]));
      if (c1 || c2 || c3 || c4) continue;
      else return false;
    }
  }
  return true;
};

const solution = (n, build_frame) => {
  let answer = [];
  let frame = [];
  for (let i = 0; i < n; i++) frame.push(new Array(n + 1).fill(-1));
  for (const item of build_frame) {
    const [x, y, a, b] = item; //x,y,구조물,설치/제거
    if (b === 0) {
      //삭제
      if (answer.some((t) => [x, y, a].every((v, i) => v === t[i]))) {
        const idx = answer.findIndex(
          (ele) => ele[0] === x && ele[1] === y && ele[2] === a
        );
        if (idx !== -1) {
          answer = [
            ...answer.slice(0, idx),
            ...answer.slice(idx + 1, answer.length),
          ];
          if (check(answer) === false) {
            answer.push([x, y, a]);
          } else {
            continue;
          }
        }
      }
    } else if (b === 1) {
      //설치
      answer.push([x, y, a]);
      if (check(answer) === false) {
        const idx = answer.findIndex(
          (ele) => ele[0] === x && ele[1] === y && ele[2] === a
        );
        console.log(x, y, a, idx);
        if (idx !== -1) {
          answer = [
            ...answer.slice(0, idx),
            ...answer.slice(idx + 1, answer.length),
          ];
        }
      } else {
        continue;
      }
    }
  }
  answer = answer.sort((p1, p2) => {
    if (p1[0] < p2[0]) return p1[0] - p2[0];
    else if (p1[0] === p2[0]) return p1[1] - p2[1];
    else if (p1[0] === p2[0] && p1[1] === p2[1]) return p2[2] - p1[2];
  });
  //console.log(answer);
  return answer;
};
solution(5, [
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [2, 1, 0, 1],
  [2, 2, 1, 1],
  [5, 0, 0, 1],
  [5, 1, 0, 1],
  [4, 2, 1, 1],
  [3, 2, 1, 1],
]);
solution(5, [
  [0, 0, 0, 1],
  [2, 0, 0, 1],
  [4, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 1, 1],
  [3, 1, 1, 1],
  [2, 0, 0, 0],
  [1, 1, 1, 0],
  [2, 2, 0, 1],
]);
