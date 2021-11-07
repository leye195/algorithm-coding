/**
 * https://leetcode.com/problems/find-the-difference/
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const mp = {};
  for (let i = 0; i < s.length; i++) {
    if (!mp[s[i]]) mp[s[i]] = 1;
    else mp[s[i]] += 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (mp[t[i]]) mp[t[i]] -= 1;
    else if (!mp[t[i]]) return t[i];
  }
};
