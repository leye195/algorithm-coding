/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  const enough = (divisor) => {
    let sum = nums.reduce((x, y) => x + Math.ceil(y / divisor), 0);
    return sum <= threshold;
  };

  let left = 1;
  let right = Math.max(...nums);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (enough(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
};
