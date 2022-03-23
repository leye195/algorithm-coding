const solution = (board) => {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const bfs = (x, y, visited, board) => {
    let count = 0;
    const q = [[x, y]];
    visited[x][y] = 1;

    while (q.length) {
      const [cx, cy] = q.shift();

      for (let i = 0; i < 4; i++) {
        const dx = cx + directions[i][0];
        const dy = cy + directions[i][1];

        if (
          dx >= 0 &&
          dx < board.length &&
          dy >= 0 &&
          dy < board[0].length &&
          !visited[dx][dy] &&
          board[dx][dy] === 0
        ) {
          visited[dx][dy] = 1;
          q.push([dx, dy]);
        }
      }
    }
    return count;
  };

  let result = 0;

  const visited = [];

  for (let i = 0; i < board.length; i++) {
    const tmp = [];
    for (let j = 0; j < board[0].length; j++) {
      tmp.push(0);
    }
    visited.push(tmp);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (!visited[i][j] && board[i][j] === 0) {
        bfs(i, j, visited, board);
        result++;
      }
    }
  }

  return result;
};

console.log(
  solution([
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ])
);
