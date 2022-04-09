/**
 * https://leetcode.com/problems/hamming-distance
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  let cnt = 0;
  const z = x ^ y;

  for (let i = 1; i < 33; i++) {
    const tmp = z & (1 << i);
    if (tmp) cnt++;
  }

  return cnt;
};
