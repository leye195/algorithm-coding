/**
 * https://leetcode.com/problems/third-maximum-number
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  nums = [...new Set(nums)];
  nums.sort((x, y) => y - x);

  if (nums.length < 3) return nums[0];

  return nums[2];
};
