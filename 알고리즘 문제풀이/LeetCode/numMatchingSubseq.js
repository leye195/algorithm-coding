/**
 * https://leetcode.com/problems/number-of-matching-subsequences/
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function (s, words) {
  let ans = 0;
  let idx = 0;
  const mp = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    mp[word] = mp[word] ? mp[word] + 1 : 1;
  }

  Object.keys(mp).forEach((word) => {
    let i = 0;
    let j = 0;

    while (i < word.length && j < s.length) {
      if (word[i] === s[j]) {
        i++;
        j++;
      } else {
        j++;
      }
    }

    if (i === word.length) {
      ans += mp[word];
    }
  });

  return ans;
};
