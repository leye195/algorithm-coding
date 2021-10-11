/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const result = { 0: [root.val] };
  const q = [[root, 0]];

  while (q.length) {
    const [tmp, level] = q.shift();

    if (tmp.children) {
      for (let i = 0; i < tmp.children.length; i++) {
        const child = tmp.children[i];
        if (result[level + 1])
          result[level + 1] = [...result[level + 1], child.val];
        else result[level + 1] = [child.val];
        q.push([child, level + 1]);
      }
    }
  }
  return Object.values(result);
};
