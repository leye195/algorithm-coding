const solution = (n) => {
  let count = 0;
  const coins = [500, 100, 50, 10];

  for (let i = 0; i < coins.length; i++) {
    count += Math.floor(n / coins[i]);
    n %= coins[i];
  }

  console.log(count);
};

solution(1210);
