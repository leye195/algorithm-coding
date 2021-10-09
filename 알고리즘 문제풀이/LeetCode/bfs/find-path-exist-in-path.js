/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
  const graph = {};
  const visited = new Array(n + 1).fill(0);

  for (let i = 0; i < edges.length; i++) {
    const [x, y] = edges[i];
    if (graph[x]) graph[x] = [...graph[x], y];
    else graph[x] = [y];

    if (graph[y]) graph[y] = [...graph[y], x];
    else graph[y] = [x];
  }
  const q = [start];
  visited[start] = 1;

  while (q.length) {
    const tmp = q.shift();

    if (tmp === end) return true;
    for (let i = 0; i < graph[tmp].length; i++) {
      if (!visited[graph[tmp][i]]) {
        q.push(graph[tmp][i]);
        visited[graph[tmp][i]] = 1;
      }
    }
  }
  return false;
};
