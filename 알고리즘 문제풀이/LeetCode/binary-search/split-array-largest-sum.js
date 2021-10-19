/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  const feasible = (val) => {
    let count = 1;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (total + num <= val) total += num;
      else {
        total = num;
        count++;
      }
    }
    return count <= m;
  };

  let left = Math.max(...nums);
  let right = nums.reduce((x, y) => x + y, 0);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (feasible(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
};
