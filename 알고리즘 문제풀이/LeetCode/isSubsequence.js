/**
 * https://leetcode.com/problems/is-subsequence
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let idx = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[idx]) {
      idx++;
    }
  }

  return idx === s.length ? true : false;
};
