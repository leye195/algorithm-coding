/**
 * https://leetcode.com/problems/largest-perimeter-triangle/
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((x, y) => x - y);

  for (let i = nums.length - 3; i >= 0; i--) {
    if (nums[i] + nums[i + 1] > nums[i + 2])
      return nums[i] + nums[i + 1] + nums[i + 2];
  }
  return 0;
};
