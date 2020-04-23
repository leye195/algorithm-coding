

'''
|   | | | |
1 1 1 2 2 3
if nums[i-1]!=nums[i+1] 
put element into idx=pos
'''
def solution(nums):
    if len(nums)<3:
        return len(nums)
    ans=1
    for i in range(1,len(nums)-1):
        if nums[i-1]!=nums[i+1]:
            nums[ans]=nums[i]
            ans+=1
    nums[ans]=nums[-1]
    print(ans)
    return ans+1