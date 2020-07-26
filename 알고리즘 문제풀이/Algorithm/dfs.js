const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let answer = 0;
function dfs(maps, x, y, dx, dy, r) {
  maps[x][y] = -1;
  for (let i = 0; i < 4; i++) {
    const d = directions[i];
    const tx = x + d[0],
      ty = y + d[1];
    if (tx >= 0 && tx < maps.length && ty >= 0 && ty < maps.length) {
      if (tx === dx && ty === dy) {
        //도착
        answer = Math.min(answer, r);
      }
      maps[x][y] = 1; //되돌림
      return; //이전 갈림길로 이동
    }
    if (maps[tx][ty] === 1) {
      dfs(tx, ty, dx, dy, r + 1);
    }
  }
  maps[x][y] = 1; //되돌림
}
