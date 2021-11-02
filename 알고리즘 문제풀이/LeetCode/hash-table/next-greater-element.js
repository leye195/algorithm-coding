/**
 * https://leetcode.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const ans = [];
  const mp = {};
  for (let i = 0; i < nums2.length; i++) {
    mp[nums2[i]] = nums2.slice(i + 1, nums2.length);
  }
  for (let i = 0; i < nums1.length; i++) {
    let found = false;
    for (let j = 0; j < mp[nums1[i]].length; j++) {
      if (mp[nums1[i]][j] > nums1[i]) {
        ans.push(mp[nums1[i]][j]);
        found = true;
        break;
      }
    }
    if (!found) ans.push(-1);
  }
  return ans;
};
