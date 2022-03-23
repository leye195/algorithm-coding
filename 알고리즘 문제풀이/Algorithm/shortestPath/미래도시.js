const solution = (n, arr, x, k) => {
  const INF = Number.MAX_SAFE_INTEGER;
  const graph = [];

  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < n; j++) {
      if (i === j) tmp.push(0);
      else tmp.push(INF);
    }
    graph.push(tmp);
  }

  for (let i = 0; i < arr.length; i++) {
    const [x, y] = arr[i];
    graph[x][y] = 1;
    graph[y][x] = 1;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  const result = graph[0][k] + graph[k][x];

  if (result === INF) console.log(-1);
  else console.log(result);
};

solution(
  5,
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 4],
  ],
  3,
  4
);
