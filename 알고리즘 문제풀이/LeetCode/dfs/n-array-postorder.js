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
var postorder1 = function (root) {
  const result = [];
  const treverse = (root) => {
    if (!root) return;
    if (root.children) {
      root.children.forEach((child) => {
        treverse(child);
        result.push(child.val);
      });
    }
  };
  treverse(root);
  if (root) result.push(root.val);
  return result;
};

var postorder2 = function (root) {
  const result = [];
  const st = [];

  if (!root) return [];
  st.push(root);

  while (st.length) {
    root = st.pop();
    result.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
      st.push(root.children[i]);
    }
  }
  return result.reverse();
};
