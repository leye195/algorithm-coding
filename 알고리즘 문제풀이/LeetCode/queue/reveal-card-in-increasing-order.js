/**
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/submissions/
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const ans = new Array(deck.length);
  const indexList = [];

  for (let i = 0; i < deck.length; i++) {
    indexList.push(i);
  }
  deck.sort((x, y) => x - y);

  for (let i = 0; i < deck.length; i++) {
    ans[indexList.shift()] = deck[i];
    if (indexList.length) {
      indexList.push(indexList.shift());
    }
  }

  return ans;
};
