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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let result = 0;
  const treverse = (root, low, high) => {
    if (!root) return;

    if (root.val >= low && root.val <= high) result += root.val;

    if (root.val > low) treverse(root.left, low, high);

    if (root.val < high) treverse(root.right, low, high);
  };
  treverse(root, low, high);
  return result;
};
