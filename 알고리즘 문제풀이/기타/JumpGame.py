def solution(nums):
    dp=[False for i in range(len(nums))]
    if nums[0]==0 and len(nums)>1:
        return False
    else:
        backtrack(nums,0,dp)
    return dp[len(nums)-1]
def backtrack(nums,idx,dp):
    if idx>=len(nums):
        return 
    else:
        dp[idx]=True
        for i in range(1,nums[idx]+1):
            backtrack(nums,idx+i,dp)
        return 

def solution1(nums):
    max_r=0
    for i in range(len(nums)):
        if i<=max_r:
            max_r=max(max_r,i+nums[i])
            if max_r>=len(nums)-1:
                return True
    return False
print(solution([2,3,1,1,4]))
print(solution([3,2,1,0,4]))
print(solution([0]))
print(solution([1,0,1,0]))
print(solution([1,0]))
print(solution([0,1]))
print(solution([4,1]))