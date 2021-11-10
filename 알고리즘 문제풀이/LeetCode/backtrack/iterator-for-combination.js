/**
 * https://leetcode.com/problems/iterator-for-combination/
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  this.combinations = [];
  this.idx = 0;
  const backtrack = (visited, idx, combo) => {
    if (combo.length === combinationLength) {
      this.combinations.push(combo);
      return;
    }
    for (let i = idx + 1; i < characters.length; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        backtrack(visited, i, combo + characters[i]);
        visited[i] = 0;
      }
    }
    return;
  };

  const visited = new Array(characters.length).fill(0);
  for (let i = 0; i < characters.length; i++) {
    visited[i] = 1;
    backtrack(visited, i, characters[i]);
    visited[i] = 0;
  }
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.combinations[this.idx++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  if (this.idx < this.combinations.length) return true;
  return false;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
