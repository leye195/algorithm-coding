/**
 * https://leetcode.com/problems/ransom-note
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const mp = {};

  for (let i = 0; i < magazine.length; i++) {
    const word = magazine[i];
    mp[word] = mp[word] ? mp[word] + 1 : 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const word = ransomNote[i];

    if (!mp[word]) return false;

    mp[word] -= 1;
  }

  return true;
};
