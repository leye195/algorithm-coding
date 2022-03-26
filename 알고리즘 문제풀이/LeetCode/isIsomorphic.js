/**
 * https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const mp1 = {};
  const mp2 = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const ss = s[i];
    const tt = t[i];

    if (!mp1[ss] && !mp2[tt]) {
      mp1[ss] = tt;
      mp2[tt] = ss;
    } else if (!mp1[ss] && mp2[tt]) {
      mp1[ss] = ss;
    } else if (mp1[ss] && !mp2[tt]) {
      mp2[tt] = tt;
    }
  }

  let s1 = "";
  let s2 = "";

  for (let i = 0; i < s.length; i++) {
    s1 += mp1[s[i]];
    s2 += mp2[t[i]];
  }

  return s1 === t && s2 === s;
};
