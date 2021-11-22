/**
 * https://leetcode.com/problems/largest-odd-number-in-string/submissions/
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (!["0", "2", "4", "6", "8"].includes(num[i]))
      return num.substring(0, i + 1);
  }
  return "";
};
