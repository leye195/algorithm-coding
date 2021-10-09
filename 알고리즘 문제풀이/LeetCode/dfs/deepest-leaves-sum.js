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
var deepestLeavesSum = function (root) {
  const leaves = {};
  const q = [[root, 0]];
  let maxDepth = 0;

  while (q.length) {
    const [node, level] = q.shift();
    if (!node.left && !node.right) {
      leaves[level] = leaves[level] ? leaves[level] + node.val : node.val;
      maxDepth = Math.max(maxDepth, level);
    }

    if (node.left) q.push([node.left, level + 1]);
    if (node.right) q.push([node.right, level + 1]);
  }
  return leaves[maxDepth];
};
