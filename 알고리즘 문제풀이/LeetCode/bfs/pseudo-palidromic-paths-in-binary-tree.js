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

// Runtime Error
var pseudoPalindromicPaths1 = function (root) {
  let ans = 0;
  const treverse = (root, paths) => {
    if (root && !root.left && !root.right) {
      let mp = {};
      for (let i = 0; i < paths.length; i++) {
        mp[paths[i]] = mp[paths[i]] ? mp[paths[i]] + 1 : 1;
      }
      const counts = Object.values(mp);
      let oddCount = 0;
      for (let i = 0; i < counts.length; i++) {
        if (counts[i] % 2 === 1) {
          oddCount += 1;
          if (oddCount > 1) break;
        }
      }

      if (oddCount <= 1) ans += 1;
      return;
    }
    root.left && treverse(root.left, [...paths, root.left.val]);
    root.right && treverse(root.right, [...paths, root.right.val]);
  };
  treverse(root, [root.val]);
  return ans;
};
