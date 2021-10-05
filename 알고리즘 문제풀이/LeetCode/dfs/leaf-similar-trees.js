/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leafs1 = [];
  const leafs2 = [];

  const treverse = (root, type) => {
    if (!root) return;
    treverse(root.left, type);
    type === 0 && !root.left && !root.right && leafs1.push(root.val);
    type === 1 && !root.left && !root.right && leafs2.push(root.val);
    treverse(root.right, type);
  };

  treverse(root1, 0);
  treverse(root2, 1);

  if (leafs1.length !== leafs2.length) return false;
  for (let i = 0; i < leafs1.length; i++) {
    if (leafs1[i] !== leafs2[i]) return false;
  }
  return true;
};
