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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  const treverse = (root, path) => {
    !root.left && !root.right && result.push(path.join("->"));
    root.left && treverse(root.left, [...path, root.left.val]);
    root.right && treverse(root.right, [...path, root.right.val]);
  };
  treverse(root, [root.val]);
  return result;
};
