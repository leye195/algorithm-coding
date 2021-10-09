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
var maxAncestorDiff1 = function (root) {
  let result = 0;
  const treverse = (root) => {
    if (!root) return;

    const node = root;
    const st = [node];
    while (st.length) {
      const tmp = st.pop();
      result = Math.max(Math.abs(tmp.val - node.val), result);

      if (tmp.right) st.push(tmp.right);
      if (tmp.left) st.push(tmp.left);
    }

    treverse(root.left);
    treverse(root.right);
  };
  treverse(root);
  return result;
};

var maxAncestorDiff2 = function (root) {
  if (!root) return 0;

  const treverse = (root, curMax, curMin) => {
    if (!root) return curMax - curMin;

    curMax = Math.max(curMax, root.val);
    curMin = Math.min(curMin, root.val);

    return Math.max(
      treverse(root.left, curMax, curMin),
      treverse(root.right, curMax, curMin)
    );
  };
  return treverse(root, root.val, root.val);
};
