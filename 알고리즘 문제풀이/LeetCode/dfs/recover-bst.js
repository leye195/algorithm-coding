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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let node1 = null;
  let node2 = null;
  let prev = null;
  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);
    if (!node1 && (!prev || prev.val >= node.val)) {
      node1 = prev;
    }

    if (node1 && prev.val >= node.val) {
      node2 = node;
    }
    prev = node;
    inorder(node.right);
  };

  inorder(root);

  let tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;
};
