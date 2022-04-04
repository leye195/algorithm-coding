/**
 * https://leetcode.com/problems/assign-cookies
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// s[j] >= g[i] : assign cookie[j] -> child[i]
const findContentChildren = function (g, s) {
  let ans = 0;
  let n = g.length - 1;
  let m = s.length - 1;

  g.sort((x, y) => x - y);
  s.sort((x, y) => x - y);

  while (n >= 0 && m >= 0) {
    if (s[m] >= g[n]) {
      ans++;
      m--;
      n--;
    } else {
      n--;
    }
  }

  return ans;
};
