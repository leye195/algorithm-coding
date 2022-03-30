/**
 * https://leetcode.com/problems/top-k-frequent-elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    mp[num] = mp[num] ? mp[num] + 1 : 1;
  }

  return Object.keys(mp)
    .sort((x, y) => mp[y] - mp[x])
    .slice(0, k);
};
