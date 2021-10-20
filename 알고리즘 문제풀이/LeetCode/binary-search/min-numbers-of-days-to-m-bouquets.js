/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays1 = function (bloomDay, m, k) {
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

const minDays2 = (bloomDay, m, k) => {
  const feasible = (day) => {
    let bouquets = 0;
    let flowers = 0;
    for (let i = 0; i < bloomDay.length; i++) {
      const bloom = bloomDay[i];
      if (bloom <= day) {
        bouquets += Math.floor((flowers + 1) / k);
        flowers = (flowers + 1) % k;
      } else {
        flowers = 0;
      }
    }
    return bouquets >= m;
  };

  if (bloomDay.length < m * k) return -1;
  let left = 1;
  let right = Math.max(...bloomDay);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (feasible(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
};
