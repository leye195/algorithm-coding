import itertools
def solution1(nums):
    ans=[]
    for i in range(len(nums)+1):
        li=list(itertools.combinations(nums,i))
        for j in li:
            ans.append(j)
    return ans
def solution2(nums):
    sub=[[]]
    for num in nums:
        sub+=[[num] +tmp for tmp in sub]
    return sub

print(solution2([1,2,3]))
