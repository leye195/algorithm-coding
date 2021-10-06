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
var findTilt = function (root) {
  let result = 0;
  const treverse = (root) => {
    let sum = 0;

    if (!root) return;
    treverse(root.left);
    treverse(root.right);

    if (root.left) {
      sum += root.left.val;
      root.val += root.left.val;
    }

    if (root.right) {
      sum -= root.right.val;
      root.val += root.right.val;
    }
    result += Math.abs(sum);
  };
  treverse(root);
  return result;
};
