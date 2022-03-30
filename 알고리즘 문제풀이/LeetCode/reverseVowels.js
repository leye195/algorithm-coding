/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels1 = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const arr = [];
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      arr.unshift(s[i]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      s[i] = arr.shift();
    }
  }

  return s.join("");
};

const reverseVowels2 = function (s) {
  const isVowel = (s) => {
    return ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(s);
  };
  let le = 0;
  let ri = s.length - 1;

  s = s.split("");

  while (le < ri) {
    if (isVowel(s[le]) && isVowel(s[ri])) {
      const tmp = s[le];
      s[le] = s[ri];
      s[ri] = tmp;
      le++;
      ri--;
    } else if (!isVowel(s[le])) {
      le++;
    } else if (!isVowel(s[ri])) {
      ri--;
    }
  }

  return s.join("");
};
