/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones1 = function (jewels, stones) {
  let ans = 0;
  const match = {};
  for (let i = 0; i < jewels.length; i++) {
    if (!match[jewels[i]]) match[jewels[i]] = 1;
  }
  for (let i = 0; i < stones.length; i++) {
    if (match[stones[i]]) ans += 1;
  }
  return ans;
};

var numJewelsInStones2 = function (jewels, stones) {
  return [...stones].reduce((acc, stone) => {
    if (jewels.includes(stone)) return acc + 1;
    return acc;
  }, 0);
};
