/**
 * https://leetcode.com/problems/unique-number-of-occurrences/
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const mp = {};
  for (let i = 0; i < arr.length; i++) {
    if (!mp[arr[i]]) mp[arr[i]] = 1;
    else mp[arr[i]] += 1;
  }
  const counts = Object.values(mp);
  if (counts.length !== new Set([...counts]).size) return false;
  return true;
};
