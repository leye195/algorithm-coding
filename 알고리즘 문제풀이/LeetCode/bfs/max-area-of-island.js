/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const coords = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = [];
  let maxArea = 0;

  const bfs = (x, y) => {
    const q = [[x, y]];
    let area = 0;
    visited[x][y] = 1;

    while (q.length) {
      const [cx, cy] = q.shift();
      area += 1;

      for (let i = 0; i < 4; i++) {
        const tx = cx + coords[i][0];
        const ty = cy + coords[i][1];

        if (
          tx >= 0 &&
          tx < grid.length &&
          ty >= 0 &&
          ty < grid[0].length &&
          !visited[tx][ty] &&
          grid[tx][ty]
        ) {
          visited[tx][ty] = 1;
          q.push([tx, ty]);
        }
      }
    }
    maxArea = Math.max(maxArea, area);
  };

  for (let i = 0; i < grid.length; i++) {
    const tmp = [];
    for (let j = 0; j < grid[0].length; j++) {
      tmp.push(0);
    }
    visited.push(tmp);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j]) bfs(i, j);
    }
  }

  return maxArea;
};
