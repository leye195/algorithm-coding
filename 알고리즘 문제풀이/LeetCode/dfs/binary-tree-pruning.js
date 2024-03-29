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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  const isContainOne = (root) => {
    if (!root) return null;

    root.left = isContainOne(root.left);
    root.right = isContainOne(root.right);

    if (root.val === 0 && !root.left && !root.right) return null;

    return root;
  };

  if (!root) return null;

  return isContainOne(root);
};
