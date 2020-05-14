/**
 * bfs, union-find 알고리즘 활용 문제
 */
function findParent(p, x) {
  if (p[x] === x) return x;
  p[x] = getParent(p, p[x]);
  return p[x];
}
function union(p, x, y) {
  x = getParent(p, x);
  y = getParent(p, y);
  if (x > y) p[x] = y;
  else p[y] = x;
}
function bfs(land, v, x, y, h, cnt) {
  let q = [[x, y]];
  while (q.length > 0) {
    let tmp = q.pop();
    for (let i = 0; i < 4; i++) {
      if (i === 0 && tmp[0] + 1 < land.length && v[tmp[0] + 1][tmp[1]] === 0) {
        if (Math.abs(land[tmp[0]][tmp[1]] - land[tmp[0] + 1][tmp[1]]) <= h) {
          q.push([tmp[0] + 1, tmp[1]]);
          v[tmp[0] + 1][tmp[1]] = cnt;
        }
      } else if (i === 1 && tmp[1] - 1 >= 0 && v[tmp[0]][tmp[1] - 1] === 0) {
        if (Math.abs(land[tmp[0]][tmp[1]] - land[tmp[0]][tmp[1] - 1]) <= h) {
          q.push([tmp[0], tmp[1] - 1]);
          v[tmp[0]][tmp[1] - 1] = cnt;
        }
      }
      if (i === 2 && tmp[0] - 1 >= 0 && v[tmp[0] - 1][tmp[1]] === 0) {
        if (Math.abs(land[tmp[0]][tmp[1]] - land[tmp[0] - 1][tmp[1]]) <= h) {
          q.push([tmp[0] - 1, tmp[1]]);
          v[tmp[0] - 1][tmp[1]] = cnt;
        }
      }
      if (i === 3 && tmp[1] + 1 < land.length && v[tmp[0]][tmp[1] + 1] === 0) {
        if (Math.abs(land[tmp[0]][tmp[1]] - land[tmp[0]][tmp[1] + 1]) <= h) {
          q.push([tmp[0], tmp[1] + 1]);
          v[tmp[0]][tmp[1] + 1] = cnt;
        }
      }
    }
  }
}
function solution(land, height) {
  let answer = 0,
    v = [],
    cnt = 1,
    obj = {},
    p = [0];
  for (let i = 0; i < land.length; i++) {
    let tmp = [];
    for (let j = 0; j < land.length; j++) tmp.push(0);
    v.push(tmp);
  }

  //bfs 활용 grouping 진행
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land.length; j++) {
      if (v[i][j] === 0) {
        v[i][j] = cnt;
        bfs(land, v, i, j, height, cnt);
        cnt++;
      }
    }
  }
  for (let i = 1; i < cnt; i++) p.push(i);
  //grouping 이후 높이 찾기 진행
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land.length; j++) {
      let nx = i + 1,
        ny = j + 1;
      //오른쪽
      if (nx < land.length && v[nx][j] !== v[i][j]) {
        let mi = Math.min(v[nx][j], v[i][j]),
          ma = Math.max(v[nx][j], v[i][j]);
        obj[[mi, ma]] =
          obj[[mi, ma]] === undefined
            ? Math.abs(land[i][j] - land[nx][j])
            : Math.min(obj[[mi, ma]], Math.abs(land[i][j] - land[nx][j]));
      }
      if (ny < land.length && v[i][ny] !== v[i][j]) {
        let mi = Math.min(v[i][ny], v[i][j]),
          ma = Math.max(v[i][ny], v[i][j]);
        obj[[mi, ma]] =
          obj[[mi, ma]] === undefined
            ? Math.abs(land[i][j] - land[i][ny])
            : Math.min(obj[[mi, ma]], Math.abs(land[i][j] - land[i][ny]));
      }
    }
  }
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
  return answer;
}
