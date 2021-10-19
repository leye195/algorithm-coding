/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const feasible = (speed) => {
    let total = 0;
    for (let i = 0; i < piles.length; i++) {
      total += Math.ceil(piles[i] / speed);
    }
    return total <= h;
  };

  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (feasible(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
};
