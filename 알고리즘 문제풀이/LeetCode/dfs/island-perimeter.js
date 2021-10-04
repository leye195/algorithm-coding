/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const coord = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result = 0;
  let pos = [0, 0];
  let visited = [];

  for (let i = 0; i < grid.length; i++) {
    const tmp = [];
    for (let j = 0; j < grid[0].length; j++) tmp.push(0);
    visited.push(tmp);
  }

  for (let i = 0; i < grid.length; i++) {
    let found = false;
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        pos = [i, j];
        found = true;
        break;
      }
    }

    if (found) break;
  }

  const st = [pos];
  while (st.length) {
    const [cx, cy] = st.pop();

    if (visited[cx][cy]) {
      let count = 4;
      visited[cx][cy] = 1;
      for (let i = 0; i < 4; i++) {
        const tx = cx + coord[i][0];
        const ty = cy + coord[i][1];

        if (
          tx >= 0 &&
          tx < grid.length &&
          ty >= 0 &&
          ty < grid[0].length &&
          grid[tx][ty]
        ) {
          count -= 1;
        }
      }
      result += count;
    }

    for (let i = 0; i < 4; i++) {
      const tx = cx + coord[i][0];
      const ty = cy + coord[i][1];

      if (
        tx >= 0 &&
        tx < grid.length &&
        ty >= 0 &&
        ty < grid[0].length &&
        !visited[tx][ty] &&
        grid[tx][ty]
      ) {
        st.push([tx, ty]);
        visited[tx][ty] = 1;
      }
    }
  }
  return result;
};
