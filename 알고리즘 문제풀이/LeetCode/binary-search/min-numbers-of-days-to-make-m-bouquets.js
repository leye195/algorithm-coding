/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  const n = bloomDay.length;
  let left = 1;
  let right = Math.max(...bloomDay);
  if (n < m * k) return -1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let bouq = 0;
    let flow = 0;

    for (let i = 0; i < n; i++) {
      if (bloomDay[i] > mid) {
        flow = 0;
      } else if (++flow >= k) {
        bouq++;
        flow = 0;
      }
    }

    if (bouq < m) left = mid + 1;
    else right = mid;
  }
  return left;
};
