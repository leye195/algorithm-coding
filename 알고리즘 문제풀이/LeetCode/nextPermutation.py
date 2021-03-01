#link: https://leetcode.com/problems/next-permutation/submissions/

class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        if len(nums)>1:
            n_idx1,n_idx2 = None, None
            for i in range(len(nums)-2,-1,-1):
                if(nums[i]<nums[i+1]):
                    n_idx1 = i
                    break
            if(n_idx1 is None):
                nums.sort()
            else:
                min_n = nums[n_idx1+1]
                for i in range(n_idx1+1,len(nums)):
                    if nums[n_idx1] < nums[i] and min_n >= nums[i]:
                        min_n = min(min_n,nums[i])
                        n_idx2 = i
                nums[n_idx1],nums[n_idx2] = nums[n_idx2],nums[n_idx1]
                nums[n_idx1+1:] = sorted(nums[n_idx1+1:])
