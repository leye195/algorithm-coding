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
 * @return {TreeNode}
 */
var mergeTrees1 = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees1(root1.left, root2.left);
  root1.right = mergeTrees1(root1.right, root2.right);
  return root1;
};

var mergeTrees2 = function (root1, root2) {
  if (!root1) return root2;

  if (!root2) return root1;

  const st = [];
  st.push([root1, root2]);

  while (st.length > 0) {
    tmp = st.pop();
    if (tmp[0] && tmp[1]) {
      tmp[0].val += tmp[1].val;

      if (!tmp[0].left) tmp[0].left = tmp[1].left;
      else st.push([tmp[0].left, tmp[1].left]);

      if (!tmp[0].right) tmp[0].right = tmp[1].right;
      else st.push([tmp[0].right, tmp[1].right]);
    }
  }
  return root1;
};
