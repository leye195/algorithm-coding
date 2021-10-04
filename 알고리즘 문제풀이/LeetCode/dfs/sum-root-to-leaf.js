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
var sumRootToLeaf = function (root) {
  let result = 0;
  const treverse = (root, bin) => {
    if (!root.left && !root.right) {
      result += parseInt(bin, 2);
      return;
    }
    root.left && treverse(root.left, `${bin}${root.left.val}`);
    root.right && treverse(root.right, `${bin}${root.right.val}`);
  };
  treverse(root, `${root.val}`);
  return result;
};
