def solution1(nums,target):
    return target in nums

def solution2(nums,target):
    nums=sorted(nums)
    le,ri=0,len(nums)-1
    while(le<=ri):
        mid=int((le+ri))/2
        if nums[mid]==target:
            return True
        elif nums[mid]>target:
            ri=mid-1
        elif nums[mid]<target:
            le=mid+1
    return False

def solution3(nums,target):
    le,ri=0,len(nums)-1
    while(le<=ri):
        mid=int((le+ri)/2)
        if(nums[mid]==target):
            return True
        if(nums[le]<nums[mid]):
            if(target<nums[mid] and target<=nums[le]):
                ri=mid-1
            else:
                le=mid+1
        elif(nums[mid]<nums[le]):
            if(target>nums[mid] and target<=nums[ri]):
                le=mid+1
            else:
                ri=mid-1
        elif(nums[mid]==nums[le])