/**
 * https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const bfs = (grid, x, y) => {
    const q = [[x, y]];

    while (q.length) {
      const [cx, cy] = q.shift();

      for (let i = 0; i < 4; i++) {
        const dx = cx + direction[i][0];
        const dy = cy + direction[i][1];

        if (
          dx >= 0 &&
          dx < grid.length &&
          dy >= 0 &&
          dy < grid[0].length &&
          grid[dx][dy] === "1"
        ) {
          q.push([dx, dy]);
          grid[dx][dy] = "0";
        }
      }
    }
  };

  let ans = 0;
  const n = grid.length;
  const m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] === "0";
        bfs(grid, i, j);
        ans++;
      }
    }
  }

  return ans;
};
