/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let lo = 0;
  let hi = arr.length;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    // arr[mid] - 1 : the number of numbers from 1 ~ arr[mid] - 1
    // arr[mid] - 1 - mid : the number of missing numbers from 1 ~ arr[mid] - 1
    if (arr[mid] - 1 - mid < k) lo = mid + 1;
    else hi = mid;
  }
  return lo + k;
};
