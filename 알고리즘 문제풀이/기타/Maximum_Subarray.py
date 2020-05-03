from itertools import chain,combinations

#Time Limited Exceeded
def solution(nums):
    s=None
    for i in range(len(nums)):
        for j in range(i,len(nums)):
            if s==None:
                s=sum(nums[i:j+1])
            elif s<sum(nums[i:j+1]):
                s=sum(nums[i:j+1])
    return s

def solution1(nums):
    max_sum=nums[0]
    prev_max=0
    if not nums:
        return None
    if len(nums)==1:
        return nums[0]
    for num in nums:
        prev_max=max(prev_max+num,prev_max)
        max_sum=max(prev_max,max_sum)
    return max_sum

def solution2(nums):
    dp=[0 for i in range(len(nums))]
    dp[0]=nums[0]
    for i in range(1,len(nums)):
        dp[i]=max(dp[i-1]+nums[i],nums[i])
    return max(dp)
#print(solution([-2,1,-3,4,-1,2,1,-5,4]))

