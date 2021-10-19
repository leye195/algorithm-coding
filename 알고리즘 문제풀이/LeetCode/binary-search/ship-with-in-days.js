/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays1 = function (weights, days) {
  const left = Math.max(weights);
  const right = weights.reduce((x, y) => x + y, 0);

  while (left < right) {
    const mid = Math.floor((x + y) / 2);
    let total = 0;
    let d = 1;

    for (let i = 0; i < weights.length; i++) {
      const weight = weights[i];
      if (total + weight > mid) {
        total = weight;
        d += 1;
      } else {
        total += weight;
      }
    }

    if (d > days) left = mid + 1;
    else right = mid;
  }
  return left;
};

const shipWithinDays2 = (weights, D) => {
  const isCanBeShipedInDays = (capacity) => {
    let day = 1;
    let total = 0;
    for (let i = 0; i < weights.length; i++) {
      const weight = weights[i];
      if (total + weight <= capacity) total += weight;
      else {
        total = weight;
        day++;
      }
    }
    return day <= D;
  };

  let left = Math.max(...weights);
  let right = weights.reduce((x, y) => x + y, 0);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (isCanBeShipedInDays(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
};
