/**
 * O(n^2)
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS1 = function (nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

/**
 * O(nlgN)
 * @param {number[]} nums
 * @return {number}
 */

const lengthOfLIS2 = function (nums) {
  const lowerBound = (arr, lo, hi, target) => {
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);

      if (target <= arr[mid]) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  };

  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];
    const idx = lowerBound(arr, 0, arr.length, target);

    if (idx >= arr.length) arr.push(target);
    else if (arr[idx] < target) arr[idx] = target;
  }
  return arr.length;
};
