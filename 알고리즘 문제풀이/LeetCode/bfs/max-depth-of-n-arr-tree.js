/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  let result = 0;

  if (!root) return 0;

  const q = [[root, 1]];

  while (q.length) {
    const [node, depth] = q.shift();
    const children = node.children;
    result = Math.max(result, depth);

    for (let i = 0; i < children.length; i++) {
      q.push([children[i], depth + 1]);
    }
  }
  return result;
};
