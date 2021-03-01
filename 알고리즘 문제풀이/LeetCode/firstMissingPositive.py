#link: https://leetcode.com/problems/first-missing-positive/submissions/

class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        answer = 1
        nums.sort()
        for i in nums:
            if i==answer:
                answer+=1
        return answer