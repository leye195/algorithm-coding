/**
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type/
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let ans = 0;
  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let isBroken = false;
    for (let j = 0; j < word.length; j++) {
      if (brokenLetters.includes(word[j])) {
        isBroken = true;
        break;
      }
    }
    if (!isBroken) ans += 1;
  }
  return ans;
};
