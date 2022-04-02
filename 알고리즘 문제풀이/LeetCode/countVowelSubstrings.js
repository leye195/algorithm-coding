/**
 * @param {string} word
 * @return {number}
 */
const countVowelSubstrings = function (word) {
  let ans = 0;

  const vowels = ["a", "e", "i", "o", "u"];
  const isVowelString = (s) => {
    if (
      s.includes("a") &&
      s.includes("e") &&
      s.includes("i") &&
      s.includes("o") &&
      s.includes("u")
    ) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      for (let j = i; j < word.length; j++) {
        if (isVowelString(word.slice(i, j + 1)) && vowels.includes(word[j])) {
          ans++;
        }

        if (!vowels.includes(word[j])) {
          break;
        }
      }
    }
  }
  return ans;
};
