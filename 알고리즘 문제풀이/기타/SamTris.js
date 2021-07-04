function solution(block, board) {
  function deepCopy(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) result.push([...arr[i]]);
    return result;
  }

  function checkBlock(x, y, block, blockBoard) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (
        x + block[i][0] < 0 ||
        x + block[i][0] >= board.length ||
        y + block[i][1] < 0 ||
        y + block[i][1] >= board[0].length
      )
        return 0;
    }
    for (let i = 0; i < 3; i++) {
      blockBoard[x + block[i][0]][y + block[i][1]] = 1;
    }

    for (let i = blockBoard.length - 1; i >= 0; i--) {
      let flag = true;
      for (let j = 0; j < blockBoard[0].length; j++) {
        if (blockBoard[i][j] === 0) {
          flag = false;
          break;
        }
      }
      if (flag) count += 1;
    }
    return count;
  }

  const blocks = [
    [
      [0, 0],
      [-1, 0],
      [-2, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [0, 0],
      [-1, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
    ],
    [
      [0, 0],
      [-1, 0],
      [-1, -1],
    ],
    [
      [0, 0],
      [-1, 0],
      [-1, 1],
    ],
  ];
  let answer = -1;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const tmp = deepCopy(board);
      if (tmp[i][j] === 0) {
        answer = Math.max(answer, checkBlock(i, j, blocks[block], tmp));
      }
    }
  }

  return answer;
}
