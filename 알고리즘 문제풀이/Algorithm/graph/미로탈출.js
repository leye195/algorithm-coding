const solution = (board) => {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const q = [[0, 0]];
  const n = board.length;
  const m = board[0].length;

  while (q.length) {
    const [cx, cy] = q.shift();

    for (let i = 0; i < 4; i++) {
      const dx = cx + directions[i][0];
      const dy = cy + directions[i][1];

      if (dx < 0 || dx >= n || dy < 0 || dy >= m || board[dx][dy] === 0) {
        continue;
      }

      if (board[dx][dy] === 1) {
        board[dx][dy] = board[cx][cy] + 1;
        q.push([dx, dy]);
      }
    }
  }

  return board[n - 1][m - 1];
};

console.log(
  solution([
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ])
);
