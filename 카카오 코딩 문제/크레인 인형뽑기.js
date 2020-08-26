const solution = (board, moves) => {
  let answer = 0,
    st = [],
    n = board.length;
  for (const move of moves) {
    const idx = move - 1;
    for (let i = 0; i < n; i++) {
      if (board[i][idx]) {
        if (st.length > 0 && st[st.length - 1] === board[i][idx]) {
          answer += 2;
          st.pop();
        } else st.push(board[i][idx]);
        board[i][idx] = 0;
        break;
      } else {
        continue;
      }
    }
  }
  return answer;
};

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
