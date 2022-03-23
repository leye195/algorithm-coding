const solution = (n, m) => {
  const dp = new Array(m + 1).fill(10001);

  dp[i] = 0;
  for (let i = 0; i < n.length; i++) {
    dp[n[i]] = 1;
  }

  for (let i = 2; i <= m; i++) {
    for (let j = 0; j < n.length; j++) {
      const coin = n[j];

      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  /*
  for(let i=0;i<n.length;i++) {
    for(let j=n[i],i<=m;j++) {
        dp[j] = Math.min(dp[j],dp[j-n[i]]+1);
    }
  }
*/

  return dp[m] === 10001 ? -1 : dp[m];
};

console.log(solution([2, 3], 15));
console.log(solution([3, 5, 7], 4));
