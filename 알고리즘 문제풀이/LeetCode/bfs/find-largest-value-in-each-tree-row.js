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
var largestValues = function (root) {
  const ans = [];

  if (root) {
    const q = [root];
    while (q.length) {
      const tmpLength = q.length;
      let maxNum = Number.MIN_SAFE_INTEGER;
      for (let i = 0; i < tmpLength; i++) {
        const node = q.shift();
        maxNum = Math.max(maxNum, node.val);

        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
      ans.push(maxNum);
    }
  }
  return ans;
};
