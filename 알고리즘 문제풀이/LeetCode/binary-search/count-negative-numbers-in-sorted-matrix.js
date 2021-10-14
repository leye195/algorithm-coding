/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives1 = function (grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    let count = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] >= 0) count++;
    }
    ans += grid[i].length - count;
  }
  return ans;
};

var countNegatives2 = function (grid) {
  let ans = 0;
  const m = grid.length;
  const n = grid[0].length;
  let r = 0;
  let c = n - 1;

  while (r < m && c >= 0) {
    if (grid[r][c] < 0) {
      ans += m - r;
      c--;
    } else {
      r++;
    }
  }

  return ans;
};
