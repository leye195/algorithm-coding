/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter1 = function (letters, target) {
  return (
    letters
      .filter((letter) => letter.charCodeAt() > target.charCodeAt())
      .sort((x, y) => x - y)[0] || letters[0]
  );
};

var nextGreatestLetter2 = function (letters, target) {
  let lo = 0;
  let hi = letters.length;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (letters[mid] <= target) lo = mid + 1;
    else hi = mid;
  }
  return letters[lo % letters.length];
};
