/**
 * https://leetcode.com/problems/letter-case-permutation/
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const ans = [];
  const backtrack = (s, idx, res) => {
    if (res.length === s.length) {
      ans.push(res);
      return;
    }
    backtrack(s, idx + 1, res + s[idx + 1]);

    if (s[idx + 1].charCodeAt() >= 97 && s[idx + 1].charCodeAt() <= 122) {
      const w = String.fromCharCode(s[idx + 1].charCodeAt() - 32);
      backtrack(s, idx + 1, res + w);
    }

    if (s[idx + 1].charCodeAt() >= 65 && s[idx + 1].charCodeAt() <= 90) {
      const w = String.fromCharCode(s[idx + 1].charCodeAt() + 32);
      backtrack(s, idx + 1, res + w);
    }
  };

  backtrack(s, -1, "");
  return ans;
};
