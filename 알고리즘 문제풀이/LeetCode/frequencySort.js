/**
 * https://leetcode.com/problems/sort-characters-by-frequency
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
  const mp = {};
  for (let i = 0; i < s.length; i++) {
    mp[s[i]] = mp[s[i]] ? mp[s[i]] + 1 : 1;
  }

  return Object.keys(mp)
    .sort((x, y) => mp[y] - mp[x])
    .reduce((acc, n) => {
      for (let i = 0; i < mp[n]; i++) {
        acc += n;
      }
      return acc;
    }, "");
};
