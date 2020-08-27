const solution = (m, n, picture) => {
  let area = 0,
    size = 0;
  const visited = [],
    d = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
  const bfs = (picture, visited, x, y, color) => {
    const q = [[x, y]];
    let size = 1;
    visited[x][y] = 1;
    while (q.length > 0) {
      const [tx, ty] = q.shift();
      for (let i = 0; i < 4; i++) {
        if (
          tx + d[i][0] >= 0 &&
          tx + d[i][0] < m &&
          ty + d[i][1] >= 0 &&
          ty + d[i][1] < n &&
          visited[tx + d[i][0]][ty + d[i][1]] === 0 &&
          color === picture[tx + d[i][0]][ty + d[i][1]]
        ) {
          q.push([tx + d[i][0], ty + d[i][1]]);
          visited[tx + d[i][0]][ty + d[i][1]] = 1;
          size += 1;
        }
      }
    }
    return size;
  };
  for (let i = 0; i < m; i++) visited.push(new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] !== 0 && visited[i][j] === 0) {
        size = Math.max(bfs(picture, visited, i, j, picture[i][j]), size);
        area += 1;
      }
    }
  }
  return [area, size];
};
solution(6, 4, [
  [1, 1, 1, 0],
  [1, 2, 2, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 3],
  [0, 0, 0, 3],
]);
