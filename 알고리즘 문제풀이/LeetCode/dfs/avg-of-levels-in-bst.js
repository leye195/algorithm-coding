/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const result = [];
  let q = [root];

  while (q.length) {
    let count = 0;
    let sum = 0;
    let tmp = [];
    while (q.length) {
      const t = q.shift();
      sum += t.val;
      count += 1;

      if (t.left) tmp.push(t.left);
      if (t.right) tmp.push(t.right);
    }
    q = tmp;
    result.push(sum / count);
  }
  return result;
};
