/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const length = nums.length;
  nums.sort((x, y) => x - y);
  return nums[length - 1] * nums[length - 2] - nums[0] * nums[1];
};
