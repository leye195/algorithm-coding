/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder1 = function (root) {
  const result = [];
  const treverse = (root) => {
    if (!root) return;
    result.push(root.val);
    if (root.children) root.children.forEach((child) => treverse(child));
  };
  treverse(root);
  return result;
};

var preorder2 = function (root) {
  const result = [];
  const st = [];

  if (!root) return result;
  st.push(root);
  while (st.length) {
    root = st.pop();
    result.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
      if (root.children[i]) st.push(root.children[i]);
    }
  }

  return result;
};
