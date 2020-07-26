/*
칸을 이동할 때는 상, 하, 좌, 우로 한 칸씩 이동
현재 칸과 이동하려는 칸의 높이 차가 height 이하여야 합니다. 
높이 차가 height 보다 많이 나는 경우에는 사다리를 설치해서 이동할 수 있습니다
사다리를 설치하는데 두 격자 칸의 높이차만큼 비용이 듭니다
https://programmers.co.kr/learn/courses/30/lessons/62050
*/
const direction = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];

function findParent(p, x) {
  if (p[x] === x) return x;
  p[x] = findParent(p, p[x]);
  return p[x];
}
function union(p, x, y) {
  x = findParent(p, x);
  y = findParent(p, y);
  if (x > y) p[x] = y;
  else p[y] = x;
}
function bfs(land, arr, visited, idx, height) {
  while (arr.length > 0) {
    const [x, y] = arr.pop();
    for (let k = 0; k < 4; k++) {
      const d = direction[k];
      if (
        x + d[0] >= 0 &&
        x + d[0] < land.length &&
        y + d[1] >= 0 &&
        y + d[1] < land.length
      ) {
        if (
          visited[x + d[0]][y + d[1]] === 0 &&
          Math.abs(land[x][y] - land[x + d[0]][y + d[1]]) <= height
        ) {
          visited[x + d[0]][y + d[1]] = idx;
          arr.push([x + d[0], y + d[1]]);
        }
      }
    }
  }
}
function solution(land, height) {
  let answer = 0,
    obj = {},
    visited = [],
    cnt = 1,
    q = [],
    p = [1];
  for (let i = 0; i < land.length; i++) {
    visited.push(new Array(land.length).fill(0));
  }

  //bfs 활용 grouping
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land.length; j++) {
      if (visited[i][j] === 0) {
        visited[i][j] = cnt;
        q = [[i, j]];
        bfs(land, q, visited, cnt, height);
        cnt++;
      }
    }
  }

  for (let i = 0; i < visited.length; i++) {
    for (let j = 0; j < visited.length; j++) {
      for (let k = 0; k < 4; k++) {
        const d = direction[k];
        if (
          i + d[0] >= 0 &&
          i + d[0] < visited.length &&
          j + d[1] >= 0 &&
          j + d[1] < visited.length
        ) {
          if (visited[i][j] !== visited[i + d[0]][j + d[1]]) {
            let mi = Math.min(visited[i][j], visited[i + d[0]][j + d[1]]),
              ma = Math.max(visited[i][j], visited[i + d[0]][j + d[1]]);
            obj[[mi, ma]] =
              obj[[mi, ma]] === undefined
                ? Math.abs(land[i][j] - land[i + d[0]][j + d[1]])
                : Math.min(
                    obj[[mi, ma]],
                    Math.abs(land[i][j] - land[i + d[0]][j + d[1]])
                  );
          }
        }
      }
    }
  }
  for (let i = 1; i < cnt; i++) p.push(i);
  //union-find 알고리즘 활용 연결
  let tmp = Object.entries(obj).sort((x, y) => x[1] - y[1]);
  for (let i = 0; i < tmp.length; i++) {
    const [x, y] = tmp[i][0].split(",");
    const parsedX = parseInt(x, 10),
      parsedY = parseInt(y, 10);
    if (findParent(p, parsedX) !== findParent(p, parsedY)) {
      union(p, parsedX, parsedY);
      answer += obj[[x, y]];
    }
  }
  console.log(answer);
  return answer;
}

solution(
  [
    [1, 4, 8, 10],
    [5, 5, 5, 5],
    [10, 10, 10, 10],
    [10, 10, 10, 20],
  ],
  3
);
solution(
  [
    [10, 11, 10, 11],
    [2, 21, 20, 10],
    [1, 20, 21, 11],
    [2, 1, 2, 1],
  ],
  1
);
