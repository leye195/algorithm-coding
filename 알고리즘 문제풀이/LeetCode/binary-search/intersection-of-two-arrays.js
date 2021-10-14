/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection1 = function (nums1, nums2) {
  return [...new Set(nums1.filter((num) => nums2.includes(num)))];
};

var intersection2 = function (nums1, nums2) {
  const ans = new Set();
  const sortedNum1 = nums1.sort((x, y) => x - y);
  const sortedNum2 = nums2.sort((x, y) => x - y);

  for (let i = 0; i < sortedNum1.length; i++) {
    let le = 0;
    let ri = sortedNum2.length;
    while (le < ri) {
      const mid = Math.floor((le + ri) / 2);
      if (sortedNum2[mid] === sortedNum1[i]) ans.add(sortedNum2[mid]);

      if (sortedNum2[mid] < sortedNum1[i]) le = mid + 1;
      else ri = mid;
    }
  }
  return [...ans];
};
