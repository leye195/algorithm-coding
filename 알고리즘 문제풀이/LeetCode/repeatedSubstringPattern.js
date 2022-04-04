/**
 * https://leetcode.com/problems/repeated-substring-pattern
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const w = s.substr(0, i + 1);
    let flag = true;

    for (let j = 0; j < s.length; j += w.length) {
      if (w !== s.substr(j, w.length)) {
        flag = false;
        break;
      }
    }

    if (flag) return true;
  }

  return false;
};
