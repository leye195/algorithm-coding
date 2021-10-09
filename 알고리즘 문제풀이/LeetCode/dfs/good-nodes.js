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
var goodNodes = function (root) {
  const treverse = (root, val) => {
    if (!root) return 0;

    const max = Math.max(root.val, val);
    return (
      (root.val >= val ? 1 : 0) +
      treverse(root.left, max) +
      treverse(root.right, max)
    );
  };

  return treverse(root, root.val);
};
