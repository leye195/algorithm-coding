/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let left = 1;
  let right = Math.max(...nums);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % left === 0) {
        sum += nums[i] / left;
      } else {
        sum += nums[i] / left + 1;
      }
    }

    if (res > threshold) left = mid + 1;
    else right = mid;
  }
  return left;
};
