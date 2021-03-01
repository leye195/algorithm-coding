#link: https://leetcode.com/problems/missing-number/submissions/
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        flag = [0 for i in range(0,len(nums)+1)]
        for i in nums:
            flag[i] = 1
        return flag.index(0)