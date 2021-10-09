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
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const result = [];
  const treverse = (root) => {
    if (!root) return;

    result.push(root.val);
    treverse(root.left);
    treverse(root.right);
  };
  treverse(root1);
  treverse(root2);

  result.sort((x, y) => x - y);
  return result;
};
