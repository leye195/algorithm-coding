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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  const q = [root];
  let ans = root.val;
  while (q.length) {
    const tmpLength = q.length;
    for (let i = 0; i < tmpLength; i++) {
      const node = q.shift();

      if (i === 0 && !node.left && !node.right) ans = node.val;

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return ans;
};
