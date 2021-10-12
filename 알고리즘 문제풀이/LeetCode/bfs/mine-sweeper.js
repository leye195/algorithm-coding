/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const dirs = [
    [1, 1],
    [1, 0],
    [1, -1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, 1],
    [0, -1],
  ];
  const coords = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const q = [click];
  while (q.length) {
    const tmpLength = q.length;
    for (let i = 0; i < tmpLength; i++) {
      const [x, y] = q.shift();

      if (board[x][y] === "M") {
        board[x][y] = "X";
      } else {
        let count = 0;
        for (let j = 0; j < 8; j++) {
          const tx = x + dirs[j][0];
          const ty = y + dirs[j][1];

          if (
            tx >= 0 &&
            tx < board.length &&
            ty >= 0 &&
            ty < board[0].length &&
            board[tx][ty] === "M"
          ) {
            count += 1;
          }
        }

        if (count > 0) {
          board[x][y] = count.toString();
        } else {
          board[x][y] = "B";
          for (let j = 0; j < 8; j++) {
            const tx = x + dirs[j][0];
            const ty = y + dirs[j][1];

            if (
              tx >= 0 &&
              tx < board.length &&
              ty >= 0 &&
              ty < board[0].length &&
              board[tx][ty] === "E"
            ) {
              board[tx][ty] = "B";
              q.push([tx, ty]);
            }
          }
        }
      }
    }
  }
  return board;
};
