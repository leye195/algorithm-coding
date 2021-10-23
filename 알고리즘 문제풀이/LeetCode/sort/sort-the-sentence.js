/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const words = s
    .split(" ")
    .sort((x, y) => +x.split("").slice(-1)[0] - +y.split("").slice(-1)[0])
    .map((word) => word.slice(0, word.length - 1));
  return words.join(" ");
};
