/**
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alphabets = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (!alphabets[letter]) alphabets[letter] = 1;
    else alphabets[letter] += 1;
  }
  if (Object.keys(alphabets).length === 26) return true;
  return false;
};
