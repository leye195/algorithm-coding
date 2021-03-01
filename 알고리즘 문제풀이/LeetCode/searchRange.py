#link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        start,end = -1,-1
        for i in range(0,len(nums)):
            if nums[i] == target:
                if start==-1:
                    start = i
                else:
                    end = i
        if end==-1:
            return [start,start]
        return [start,end]
            