/**
 * https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const mp = {};
  for (let i = lowLimit; i <= highLimit; i++) {
    let tmp = i;
    let num = 0;
    while (tmp) {
      num += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (!mp[num]) mp[num] = 1;
    else mp[num] += 1;
  }
  return Math.max(...Object.values(mp).map((num) => num));
};
