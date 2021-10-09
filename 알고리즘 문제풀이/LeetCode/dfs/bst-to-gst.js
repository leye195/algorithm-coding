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
var bstToGst = function (root) {
  let prev = 0;
  const treverse = (root) => {
    if (!root) return;

    treverse(root.right);
    root.val = root.val + prev;
    prev = root.val;
    treverse(root.left);
  };
  treverse(root);
  return root;
};
