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
var maxLevelSum1 = function (root) {
  const sumList = { 1: root.val };
  const q = [[root, 1]];
  let ans = 1;
  let curLevel = 1;
  let maximum = root.val;

  while (q.length) {
    const [node, level] = q.shift();

    if (curLevel !== level) {
      sumList[level] = node.val;
      curLevel = level;
    } else {
      sumList[level] += node.val;
    }

    if (node.left) q.push([node.left, level + 1]);

    if (node.right) q.push([node.right, level + 1]);
  }

  const keys = Object.keys(sumList);
  for (let i = 0; i < keys.length; i++) {
    if (maximum < sumList[keys[i]]) {
      maximum = sumList[keys[i]];
      ans = keys[i];
    }
  }

  return ans;
};

var maxLevelSum2 = function (root) {
  let ans = 1;
  let maximum = Number.MIN_SAFE_INTEGER;
  let level = 1;
  const q = [root];

  while (q.length) {
    const curLength = q.length;
    let sum = 0;

    for (let i = 0; i < curLength; i++) {
      const node = q.shift();
      sum += node.val;

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    if (sum > maximum) {
      maximum = sum;
      ans = level;
    }
    level++;
  }
  return ans;
};
