/**
 * https://leetcode.com/problems/destination-city/
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const map = {};
  for (let i = 0; i < paths.length; i++) {
    const [from, to] = paths[i];
    map[from] = to;
  }
  let cur = paths[0][0];
  while (map[cur]) {
    cur = map[cur];
  }
  return cur;
};
