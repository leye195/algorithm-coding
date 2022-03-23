/**
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let ans = 0;
  const times = Math.floor(nums.length / 2);
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    mp[nums[i]] = mp[nums[i]] ? mp[nums[i]] + 1 : 1;

    if (mp[nums[i]] > times) return nums[i];
  }
};
