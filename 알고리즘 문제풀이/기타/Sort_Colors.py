def solution1(nums):
    tmp=[0,0,0]
    idx=0
    for i in nums:
        tmp[i]+=1
    for i in range(len(tmp)):
        for j in range(tmp[i]):
            nums[idx]=i
            idx+=1
    print(nums)