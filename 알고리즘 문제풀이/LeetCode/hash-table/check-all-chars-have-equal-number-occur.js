/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const mp = {};
  for (let i = 0; i < s.length; i++) {
    if (!mp[s[i]]) mp[s[i]] = 1;
    else mp[s[i]] += 1;
  }

  let prev = null;
  let ans = true;

  Object.keys(mp).forEach((letter) => {
    const current = mp[letter];
    if (prev && current !== prev) ans = false;
    if (!prev) prev = mp[letter];
  });
  return ans;
};
