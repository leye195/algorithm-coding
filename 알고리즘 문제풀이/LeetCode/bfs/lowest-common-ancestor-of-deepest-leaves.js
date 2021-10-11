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
var lcaDeepestLeaves1 = function (root) {
  let result = null;
  let maxDepth = 0;
  const treverse = (root, depth) => {
    maxDepth = Math.max(depth, maxDepth);

    if (!root) return depth;
    const ldepth = treverse(root.left, depth + 1);
    const rdepth = treverse(root.right, depth + 1);

    if (rdepth === maxDepth && ldepth === maxDepth) {
      result = root;
    }
    return Math.max(ldepth, rdepth);
  };
  treverse(root, 0);
  return result;
};

var lcaDeepestLeaves2 = function (root) {
  const treverse = (root, depth) => {
    if (!root) return [null, 0];
    const [left, ldepth] = treverse(root.left, depth + 1);
    const [right, rdepth] = treverse(root.right, depth + 1);

    if (ldepth > rdepth) return [left, ldepth + 1];
    if (ldepth < rdepth) return [right, rdepth + 1];
    return [root, ldepth + 1];
  };

  return treverse(root, 0)[0];
};
