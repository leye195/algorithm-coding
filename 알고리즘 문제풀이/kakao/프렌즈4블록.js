function initVisited(m, n) {
  const visited = [];
  for (let i = 0; i < m; i++) {
    const tmp = [];
    for (let j = 0; j < n; j++) {
      tmp.append(0);
    }
    visited.append(tmp);
  }
  return visited;
}
function copyBoard(board) {
  const b = board.map((v) => v.split(""));
  return b;
}
function solution(m, n, board) {
  let answer = 0,
    visited = [],
    flag = true,
    b = copyBoard(board);
  while (flag) {
    visited = initVisited(m, n);
    flag = false;
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          b[i][j] !== "*" &&
          b[i][j] === b[i][j + 1] &&
          b[i][j] === b[i + 1][j] &&
          b[i][j] === b[i + 1][j + 1]
        ) {
          visited[i][j] = 1;
          visited[i + 1][j] = 1;
          visited[i][j + 1] = 1;
          visited[i + 1][j + 1] = 1;
          flag = true;
        }
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (visited[i][j]) {
          answer += 1;
          b[i][j] = "*";
          for (let k = i; k > 0; k--) {
            const tmp = b[k][j];
            b[k][j] = b[k - 1][j];
            b[k - 1][j] = tmp;
          }
        }
      }
    }
  }
  return answer;
}
