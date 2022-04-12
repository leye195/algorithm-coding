/**
 * https://leetcode.com/problems/detect-capital
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  if (!word.replace(/[a-z]/g, "")) {
    return true;
  } else if (!word.replace(/[A-Z]/g, "")) {
    return true;
  } else if (
    word[0].charCodeAt() >= 65 &&
    word[0].charCodeAt() <= 90 &&
    !word.substring(1).replace(/[a-z]/g, "")
  ) {
    return true;
  }

  return false;
};
