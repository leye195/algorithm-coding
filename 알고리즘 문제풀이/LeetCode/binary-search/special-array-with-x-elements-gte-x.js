/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray1 = function (nums) {
  const numLength = nums.length;
  for (let i = 0; i <= numLength; i++) {
    let count = 0;
    for (let j = 0; j < numLength; j++) {
      if (nums[j] >= i) count++;
    }
    if (count === i) return i;
  }
  return -1;
};

var specialArray2 = function (nums) {
  const sortedNums = nums.sort((x, y) => x - y);

  for (let i = 0; i <= nums.length; i++) {
    const target = i;
    let lo = 0;
    let hi = sortedNums.length;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (sortedNums[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    const numsLength = sortedNums.slice(lo, nums.length).length;
    if (numsLength === target) return i;
  }
  return -1;
};
