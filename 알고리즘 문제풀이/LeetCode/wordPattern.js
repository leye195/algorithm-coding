/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const mp = {};
  const pp = [];
  const ss = s.split(" ");

  if (ss.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const w = pattern.charAt(i);
    const words = Object.values(mp);

    if (!mp[w] && !words.includes(ss[i])) {
      mp[w] = mp[w] ? mp[w] : ss[i];
    }
  }

  for (let i = 0; i < pattern.length; i++) {
    const w = pattern[i];
    pp.push(mp[w] ? mp[w] : "x");
  }

  return pp.join(" ") === s;
};
