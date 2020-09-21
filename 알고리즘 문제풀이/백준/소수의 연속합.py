# 투 포인터, 에라토스테네스의 체 활용
# 소수의 연속합 문제, 링크:https://www.acmicpc.net/problem/1644
import sys
import math
input = sys.stdin.readline

n = int(input())
prime = [1 for i in range(n+1)]
for i in range(2,int(math.sqrt(n))+1):
    if prime[i]:
        j=2
        while i*j<=n:
            prime[i*j] = 0
            j+=1
nums = []
for i in range(2,len(prime)):
    if prime[i]:
        nums.append(i)
end,answer,s = 0,0,0
for st in range(0,len(nums)):
    while end<len(nums) and s<n:
        s+=nums[end]
        end+=1
    if s==n:
        answer+=1
    s-=nums[st]
print(answer)