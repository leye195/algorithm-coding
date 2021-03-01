#link: https://leetcode.com/problems/jump-game-ii/submissions/

#time limit exceeded code
class Solution:
    def jump(self, nums: List[int]) -> int:
        def backtrack(result,pos,visited,nums,cnt):
            if pos == len(nums)-1:
                result.append(cnt)
                return
            for i in range(nums[pos],0,-1):
                if pos+i<len(nums) and visited[pos+i]==0:
                    visited[pos+i] = 1
                    backtrack(result,pos+i,visited,nums,cnt+1)
                    visited[pos+i] = 0
            return
        pos, answer = 0, []
        visited = [0 for i in range(len(nums))]
        visited[0] = 1
        backtrack(answer,0,visited,nums,0)
        
        if len(answer)>0:
            return min(answer)
        return 0

#accept code
class Solution:
    def jump(self, nums: List[int]) -> int:
        pos = 0
        steps = [0 for i in range(len(nums))]
        for i in range(len(nums)):
            if pos < len(nums)-1:
                end_point = i+nums[i]
                for j in range(pos+1,end_point+1):
                    if(j<len(nums)):
                        steps[j] = steps[i] + 1
                if end_point > pos:
                    pos = end_point
        return steps[-1]
