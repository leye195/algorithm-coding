/**
 * https://leetcode.com/problems/find-mode-in-binary-search-tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = function (root) {
  const mp = {};
  let node = root;
  const preOrder = (node) => {
    if (!node) return;

    mp[node.val] = mp[node.val] ? mp[node.val] + 1 : 1;
    preOrder(node.left);
    preOrder(node.right);
  };
  preOrder(node);

  const maxFrequency = Math.max(...Object.values(mp));

  return Object.keys(mp).filter((x) => mp[x] === maxFrequency);
};
