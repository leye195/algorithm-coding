/**
 * https://leetcode.com/problems/design-an-ordered-stream/
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.history = new Array(n);
  this.ptr = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  const chunk = [];
  this.history[idKey] = value;

  for (let i = this.ptr; i < this.history.length; i++) {
    if (!this.history[i]) break;
    chunk.push(this.history[i]);
    this.ptr++;
  }
  return chunk;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
