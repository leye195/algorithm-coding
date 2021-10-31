/**
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const times = nums.length / 2;
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    if (!mp[nums[i]]) mp[nums[i]] = 1;
    else mp[nums[i]] += 1;

    if (mp[nums[i]] === times) return nums[i];
  }
};
