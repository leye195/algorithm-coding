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
 * @return {boolean}
 */
var isUnivalTree1 = function (root) {
  const val = root.val;
  let result = true;
  const treverse = (root) => {
    if (!root) return;
    if (root.val !== val) {
      result = false;
      return;
    }
    treverse(root.left);
    treverse(root.right);
  };

  treverse(root);
  return result;
};

var isUnivalTree2 = function (root) {
  const val = root.val;
  const treverse = (root) => {
    const left = !root.left || (root.left.val === val && treverse(root.left));
    const right =
      !root.right || (root.right.val === val && treverse(root.right));
    return left && right;
  };
  return treverse(root);
};
