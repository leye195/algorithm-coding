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
var sumOfLeftLeaves = function (root) {
  let result = 0;
  const treverse = (root, prev) => {
    if (!root) return;

    treverse(root.left, root);
    if (!root.left && !root.right && prev && prev.left === root)
      result += root.val;
    treverse(root.right, root);
  };
  treverse(root);
  return result;
};
