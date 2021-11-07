/**
 * https://leetcode.com/problems/letter-tile-possibilities/
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities1 = function (tiles) {
  const backtrack = (idx, str, visited) => {
    if (!ans.includes(str)) ans.push(str);
    if (str.length === tiles.length) return;

    for (let i = 0; i < tiles.length; i++) {
      if (idx !== i && !visited[i]) {
        visited[i] = 1;
        backtrack(i, `${str}${tiles[i]}`, visited);
        visited[i] = 0;
      }
    }
  };
  const ans = [];
  const visited = new Array(tiles.length).fill(0);
  for (let i = 0; i < tiles.length; i++) {
    visited[i] = 1;
    backtrack(i, tiles[i], visited);
    visited[i] = 0;
  }
  return ans.length;
};

var numTilePossibilities2 = function (tiles) {
  let count = 0;
  const set = new Set();

  for (let i = 0; i < tiles.length; i++) {
    if (set.has(tiles[i])) continue;
    count += numTilePossibilities2(tiles.slice(0, i) + tiles.slice(i + 1)) + 1;
    set.add(tiles[i]);
  }
  return count;
};
