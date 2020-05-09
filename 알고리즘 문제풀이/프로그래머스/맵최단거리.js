//bfs 활용 최단 거리 구하기
function solution(maps) {
  let answer = [];
  let q = [[0, 0, 1]],
    d = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];
  maps[0][0] = 0;
  while (q.length > 0) {
    let tmp = q.shift();
    maps[tmp[0]][tmp[1]] = 0;
    if (tmp[0] === maps.length - 1 && tmp[1] === maps[0].length - 1)
      answer.push(tmp[2]);
    for (let i = 0; i < 4; i++) {
      let nx = tmp[0] + d[i][0],
        ny = tmp[1] + d[i][1];
      if (
        nx >= 0 &&
        nx < maps.length &&
        ny >= 0 &&
        ny < maps[0].length &&
        maps[nx][ny] === 1
      ) {
        q.push([nx, ny, tmp[2] + 1]);
        maps[nx][ny] = 0;
      }
    }
  }
  if (answer.length === 0) return -1;
  return answer[0];
}
