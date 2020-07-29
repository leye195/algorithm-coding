/*
[문제 링크] https://programmers.co.kr/learn/courses/30/lessons/67259

bfs 활용 풀이,통과 100/100
처음에는 dfs recursion 풀이로 진행했지만 생각해보니 dfs보다 bfs가 더 효울적이겠다 생각되서 bfs 활용
처음 시작 위치에서는 오른쪽과 아래로 이동 가능하기 때문에
오른쪽으로 출발하는 경우와 아래로 출발하는 2가지로 경우로 나눠 진행
*/
function solution2(board) {
  let answer = [];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  function bfs(board, x, y, dx, dy, d) {
    const s = [[x, y, 0, d]];
    const check = [];
    for (let i = 0; i < board.length; i++)
      check.push(new Array(board.length).fill(0));
    check[0][0] = 1;
    while (s.length > 0) {
      const tmp = s.shift();
      if (tmp[0] === dx && tmp[1] === dy) {
        answer.push(tmp[2]);
      }
      for (let i = 0; i < 4; i++) {
        const tx = tmp[0] + directions[i][0];
        const ty = tmp[1] + directions[i][1];
        if (
          tx >= 0 &&
          tx < board.length &&
          ty >= 0 &&
          ty < board.length &&
          board[tx][ty] === 0
        ) {
          if (
            tmp[3] === i ||
            (tmp[3] === 0 && i === 2) ||
            (tmp[3] === 2 && i === 0) ||
            (tmp[3] === 1 && i === 3) ||
            (tmp[3] === 3 && i === 1)
          ) {
            if (!check[tx][ty] || check[tx][ty] > tmp[2] + 100) {
              s.push([tx, ty, tmp[2] + 100, i]);
              check[tx][ty] = tmp[2] + 100;
            }
          } else if (
            ((tmp[3] === 0 || tmp[3] === 2) && (i === 1 || i === 3)) ||
            ((tmp[3] === 1 || tmp[3] === 3) && (i === 0 || i === 2))
          ) {
            if (!check[tx][ty] || check[tx][ty] > tmp[2] + 600) {
              check[tx][ty] = tmp[2] + 600;
              s.push([tx, ty, tmp[2] + 600, i]);
            }
          }
        }
      }
    }
  }
  bfs(board, 0, 0, board.length - 1, board[0].length - 1, 0); //오른쪽
  bfs(board, 0, 0, board.length - 1, board[0].length - 1, 1); //아래
  return Math.min(...answer);
}

solution2([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);

solution2([
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
]);
