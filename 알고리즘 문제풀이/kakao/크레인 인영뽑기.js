function solution(board, moves) {
  let answer = 0,
    st = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (st.length === 0 || st[st.length - 1] !== board[j][moves[i] - 1])
          st.push(board[j][moves[i] - 1]);
        else if (st[st.length - 1] === board[j][moves[i] - 1]) {
          st.pop();
          answer += 2;
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer;
}
