/**
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let valid = true;
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      if (!allowed.includes(letter)) {
        valid = false;
        break;
      }
    }
    if (valid) ans++;
  }
  return ans;
};
