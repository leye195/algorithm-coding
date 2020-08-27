/*
bfs를 활용해 가능한 모든 경로 갯수를 확인함

오른쪽 or 아래쪽으로만 한칸씩 이동 가능 
0인 경우에는 자동차가 자유롭게 지나갈 수 있다.
1인 경우에는 자동차 통행이 금지되어 지나갈 수 없다.
2인 경우는 보행자 안전을 위해 좌회전이나 우회전이 금지된다. (왼쪽에서 오던 차는 오른쪽으로만, 위에서 오던 차는 아래쪽으로만 진행 가능하다)
*/
const MOD = 20170805;
const solution = (m, n, city_map) => {
  let answer = 0;
  const end_x = m - 1,
    end_y = n - 1;
  const bfs = (x, y, dx, dy) => {
    const q = [[x, y, 0, -1]];
    while (q.length > 0) {
      const [cx, cy, s, d] = q.shift();
      if (cx === dx && cy === dy) {
        answer += 1;
      } else {
        for (let i = 0; i < 2; i++) {
          if (s === 2) {
            if (d === 0) {
              //왼쪽에서 옴
              if (cy + 1 <= end_y && city_map[cx][cy + 1] !== 1) {
                q.push([cx, cy + 1, city_map[cx][cy + 1], 0]);
              }
              break;
            } else if (d === 1) {
              //위에서 옴
              if (cx + 1 <= end_x && city_map[cx + 1][cy] !== 1) {
                q.push([cx + 1, cy, city_map[cx + 1][cy], 1]);
              }
              break;
            }
          } else {
            if (i === 0) {
              if (cy + 1 <= end_y && city_map[cx][cy + 1] !== 1) {
                q.push([cx, cy + 1, city_map[cx][cy + 1], 0]);
              }
              //오른쪽으로
            } else if (i === 1) {
              if (cx + 1 <= end_x && city_map[cx + 1][cy] !== 1) {
                q.push([cx + 1, cy, city_map[cx + 1][cy], 1]);
              }
            }
          }
        }
      }
    }
  };
  bfs(0, 0, end_x, end_y);
  return answer % MOD;
};
solution(3, 3, [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
solution(3, 6, [
  [0, 2, 0, 0, 0, 2],
  [0, 0, 2, 0, 1, 0],
  [1, 0, 0, 2, 2, 0],
]);
