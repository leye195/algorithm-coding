/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let ans = 0;
  const m = grid.length;
  const n = grid[0].length;

  const dfs = (x, y) => {
    if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 0) {
      grid[x][y] = 1;
      dfs(x + 1, y);
      dfs(x, y + 1);
      dfs(x - 1, y);
      dfs(x, y - 1);
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i == 0 || j == 0 || i === m - 1 || j === n - 1) && !grid[i][j]) {
        dfs(i, j);
      }
    }
  }

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!grid[i][j]) {
        dfs(i, j);
        ans += 1;
      }
    }
  }

  return ans;
};
