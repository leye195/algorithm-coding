/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];
  const target = graph.length - 1;
  const visited = new Array(graph.length).fill(0);

  const treverse = (cur, path) => {
    if (cur === target) result.push(path);
    else {
      for (let i = 0; i < graph[cur].length; i++) {
        if (!visited[graph[cur][i]]) {
          visited[graph[cur][i]] = 1;
          treverse(graph[cur][i], [...path, graph[cur][i]]);
          visited[graph[cur][i]] = 0;
        }
      }
    }
  };
  treverse(0, [0]);
  return result;
};
