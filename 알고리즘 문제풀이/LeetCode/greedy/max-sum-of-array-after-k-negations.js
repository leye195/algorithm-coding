/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let count = 0;
  nums.sort((x, y) => x - y);
  while (count < k) {
    nums[0] = -nums[0];
    nums.sort((x, y) => x - y);
    count++;
  }
  return nums.reduce((x, y) => x + y, 0);
};
