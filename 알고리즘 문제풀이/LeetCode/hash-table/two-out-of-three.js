/**
 * https://leetcode.com/problems/two-out-of-three/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  return [
    ...new Set([
      ...nums1.filter((num) => nums2.includes(num) || nums3.includes(num)),
      ...nums2.filter((num) => nums1.includes(num) || nums3.includes(num)),
    ]),
  ];
};
