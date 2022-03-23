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

const solution = (root) => {
  const preOrder = (root, newRoot) => {
    if (!root) return null;

    newRoot = new TreeNode(root.val);
    newRoot.left = preOrder(root.right, newRoot.left);
    newRoot.right = preOrder(root.left, newRoot.right);
    return newRoot;
  };

  return preOrder(root, null);
};
