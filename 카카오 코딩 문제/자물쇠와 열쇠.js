/**
 * 문제Link: https://programmers.co.kr/learn/courses/30/lessons/60059?language=javascript
 * 구간 간의 겹치는 것에 관한 문제로
 * 문제 조건이 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안된된다고 한다.
 * 1. lockSize + (keySize-1)*2 크기를 가지는 background공간을 선언하고, 중심에 lock의 값들을 할당해준다.
 * 2. key를 lock이 위치해있는 background의 [keySize-1,keySize-1]부터 [(keySize-1)+lockSize-1,(keySizw-1)+lockSize-1] 까지 이동 그리고 rotate 시키면서
 * 자물쇠를 열수 있는 조건을 만족하는지 체크 진행
 */

const solution = (key, lock) => {
  let keySize = key.length,
    lockSize = lock.length;
  const bgSize = lockSize + (keySize - 1) * 2;
  const isUnLock = (tmpKey, x, y, c_start, c_end) => {
    let background = [];
    for (let i = 0; i < bgSize; i++) {
      const tmp = new Array(bgSize).fill(0);
      background.push(tmp);
    }
    for (let i = 0; i < keySize; i++) {
      for (let j = 0; j < keySize; j++) {
        background[x + i][y + j] += tmpKey[i][j];
      }
    }

    for (let i = c_start; i < c_end; i++) {
      for (let j = c_start; j < c_end; j++) {
        background[i][j] += lock[i - c_start][j - c_start];
        if (background[i][j] !== 1) return false; //자물쇠 안 열림
      }
    }
    return true; //자물쇠 열림
  };
  const rotate = (keyArr) => {
    const tmpArr = [];
    for (let i = 0; i < keySize; i++) {
      const tmp = new Array(keySize).fill(0);
      tmpArr.push(tmp);
    }
    let targetPos = keySize - 1;
    for (let i = 0; i < keySize; i++) {
      for (let j = 0; j < keySize; j++) {
        tmpArr[j][targetPos] = keyArr[i][j];
      }
      targetPos -= 1;
    }
    return tmpArr;
  };
  const unlock = () => {
    const c_start = keySize - 1;
    const c_end = c_start + lockSize;
    let tmpKey = [...key];
    for (let i = 0; i < 4; i++) {
      //회전
      for (let j = 0; j < c_end; j++) {
        //x축 이동
        for (let k = 0; k < c_end; k++) {
          //y축 이동
          if (isUnLock(tmpKey, j, k, c_start, c_end)) return true;
        }
      }
      tmpKey = rotate(tmpKey);
    }
    return false;
  };
  return unlock();
};
console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);
