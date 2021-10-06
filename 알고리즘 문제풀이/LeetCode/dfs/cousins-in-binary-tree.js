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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const nodes = {};

  if (!root) return false;
  const q = [[root, 0]];
  while (q.length) {
    const [node, level] = q.shift();
    if (node) nodes[node.val] = level;

    if (node.left) q.push([node.left, level + 1]);
    if (node.right) q.push([node.right, level + 1]);

    if (
      node.left &&
      node.right &&
      ((node.left.val === x && node.right.val === y) ||
        (node.left.val === y && node.right.val === x))
    )
      return false;
  }
  return nodes[x] === nodes[y];
};
