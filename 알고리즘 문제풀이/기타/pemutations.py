import itertools

def solution1(nums):
    return list(itertools.permutations(nums))

def solution2(nums):
    if len(nums)==0:
        return []
    else:
        c=[0 for i in range(0,len(nums))]
        r=[]
        backtrack(nums,c,r,[])
        return r
def backtrack(nums,c,r,tmp):
    if(len(r)==len(nums)):
        r.append([i for i in r])
        return 
    for i in range(len(nums)):
        if(c[i]==1):
            continue
        else:
            c[i]=1
            tmp.append(nums[i])
            backtrack(nums,c,r,tmp)
            tmp.pop()
            c[i]=0
    