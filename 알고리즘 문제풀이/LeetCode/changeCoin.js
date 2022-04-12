const solution1 = (sum, coins) => {
  const dp = [];

  for (let i = 0; i < sum + 1; i++) {
    const tmp = [];
    for (let j = 0; j < coins.length + 1; j++) {
      tmp.push(0);
    }
    dp.push(tmp);
  }

  for (let i = 1; i < coins.length + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (j >= coins[i - 1]) {
        dp[i][j] = dp[i][j - coins[i]] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[coins.length][sum];
};

const solution2 = (amount, coins) => {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      if (j - coins[i] >= 0) {
        dp[j] += dp[j - coins[i]];
      }
    }
  }

  return dp[amount];
};
