/**
 * https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(0);

  if (n === 1) return nums[0];

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[n - 1];
};
