/**
1 3 1 5
1 3 3 8 

a[i] 는 i번째 식향 창고까지의 최적의 해
k[i] 는 식량창고에 있는 식량의 양

a[i] = max(a[i-1],a[i-2]+k[i])
*/

const solution = (n, arr) => {
  const dp = new Array(n).fill(0);
  dp[0] = arr[0]; // 0번째 식량창고 까지의 최적의 해
  dp[1] = Math.max(arr[0], arr[1]); // 1번째 식량창고 까지의 최적의 해

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
  }
  return dp[n - 1];
};

console.log(solution(4, [1, 3, 1, 5]));
