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
var increasingBST1 = function (root) {
  const nums = [];
  let node = null;
  let cur = null;

  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);
    nums.push(root.val);
    inorder(root.right);
  };

  inorder(root);

  nums.forEach((num) => {
    const tmp = new TreeNode(num);

    if (!node) {
      node = tmp;
      cur = node;
    } else {
      cur.right = tmp;
      cur = cur.right;
    }
  });
  return node;
};

// relinking
var increasingBST2 = function (root) {
  let node = new TreeNode(0);
  let cur = node;

  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);
    root.left = null;
    cur.right = root;
    cur = root;
    inorder(root.right);
  };
  inorder(root);
  return node.right;
};
