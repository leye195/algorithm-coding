/**
 * https://leetcode.com/problems/majority-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const times = Math.floor(nums.length / 3);
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    mp[num] = mp[num] ? mp[num] + 1 : 1;
  }

  return Object.keys(mp).filter((key) => mp[key] > times);
};
