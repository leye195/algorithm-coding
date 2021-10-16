/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect1 = function (nums1, nums2) {
  const ans = [];
  const sortedNum1 = nums1.sort((x, y) => x - y);
  const sortedNum2 = nums2.sort((x, y) => x - y);
  for (let i = 0; i < sortedNum1.length; i++) {
    const num1 = sortedNum1[i];
    for (let j = 0; j < sortedNum2.length; j++) {
      const num2 = sortedNum2[j];
      if (num1 === num2) {
        ans.push(num1);
        sortedNum2[j] = -1;
        break;
      }
    }
  }
  return ans;
};

var intersect2 = function (nums1, nums2) {
  const ans = [];
  const sortedNum1 = nums1.sort((x, y) => x - y);
  let sortedNum2 = nums2.sort((x, y) => x - y);
  for (let i = 0; i < sortedNum1.length; i++) {
    const target = sortedNum1[i];
    let lo = 0;
    let hi = sortedNum2.length;
    sortedNum2 = sortedNum2.sort((x, y) => x - y);

    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);

      if (sortedNum2[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    if (sortedNum2[hi] === target) {
      ans.push(target);
      sortedNum2[hi] = -1;
    }
  }
  return ans;
};

var intersect3 = function (nums1, nums2) {
  const ans = [];
  const mp = {};

  for (let i = 0; i < nums1.length; i++) {
    if (mp[nums1[i]]) mp[nums1[i]] += 1;
    else mp[nums1[i]] = 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (mp[nums2[i]]) {
      ans.push(nums2[i]);
      mp[nums2[i]] -= 1;
    }
  }

  return ans;
};
