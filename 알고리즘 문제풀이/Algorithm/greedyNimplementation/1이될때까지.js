/**
 * n에서 1을 뺀다
 * n을 k로 나눈다
 */

const solution1 = (n, k) => {
  let count = 0;
  while (n !== 1) {
    if (n % k === 0) n = n / k;
    else n -= 1;
    count++;
  }

  console.log(count);
};

const solution2 = (n, k) => {
  let count = 0;
  while (true) {
    // 나누어 떨어질때까지 마이너스
    const target = Math.floor(n / k) * k;
    count += n - target;
    n = target;

    if (n < k) break;

    count += 1;
    n = Math.floor(n / k);
  }

  // 마지막 남은 수에 대해서 1 마이너스
  count += n - 1;

  console.log(count);
};

solution1(25, 3);
solution2(25, 3);
