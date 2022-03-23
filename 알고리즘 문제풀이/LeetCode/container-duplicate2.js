/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  /*for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(i!==j&&nums[i]===nums[j]&&Math.abs(i-j)<=k) return true;
        }
    }
    return false;*/
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    if (
      mp.hasOwnProperty([nums[i]]) &&
      i !== mp[nums[i]] &&
      Math.abs(mp[nums[i]] - i) <= k
    ) {
      return true;
    }
    mp[nums[i]] = i;
  }
  return false;
};
