/**
 * https://leetcode.com/problems/surrounded-regions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
  const dfs = (x, y, board, visited) => {
    const st = [[x, y]];
    const arr = [];
    let flag = true;

    while (st.length) {
      const [cx, cy] = st.pop();
      const isOnBorder = border.find((c) => c[0] === cx && c[1] === cy);
      visited[cx][cy] = 1;
      arr.push([cx, cy]);

      if (isOnBorder) flag = false;

      if (cx - 1 >= 0 && visited[cx - 1][cy] === 0 && board[cx - 1][cy] === "O")
        st.push([cx - 1, cy]);
      if (
        cx + 1 < board.length &&
        visited[cx + 1][cy] === 0 &&
        board[cx + 1][cy] === "O"
      )
        st.push([cx + 1, cy]);
      if (cy - 1 >= 0 && visited[cx][cy - 1] === 0 && board[cx][cy - 1] === "O")
        st.push([cx, cy - 1]);
      if (
        cy + 1 < board[0].length &&
        visited[cx][cy + 1] === 0 &&
        board[cx][cy + 1] === "O"
      )
        st.push([cx, cy + 1]);
    }
    for (let i = 0; i < arr.length; i++) {
      const [cx, cy] = arr[i];
      board[cx][cy] = flag ? "X" : "O";
    }
  };

  const border = [];
  const visited = [];

  for (let i = 0; i < board.length; i++) {
    const tmp = [];
    for (let j = 0; j < board[0].length; j++) {
      tmp.push(0);
    }
    visited.push(tmp);
  }

  for (let i = 0; i < board.length; i++) {
    border.push([i, 0]);
    border.push([i, board[0].length - 1]);
  }

  for (let i = 0; i < board[0].length; i++) {
    border.push([0, i]);
    border.push([board.length - 1, i]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O" && visited[i][j] === 0) {
        dfs(i, j, board, visited);
      }
    }
  }
};
