/**
 * https://leetcode.com/problems/move-zeroes/solution/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let lastIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastIdx++] = nums[i];
    }
  }

  for (let i = lastIdx; i < nums.length; i++) {
    nums[i] = 0;
  }
};
