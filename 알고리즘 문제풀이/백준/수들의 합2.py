import sys
input = sys.stdin.readline

n,m = map(int,input().split())
nums = list(map(int,input().split()))
answer,en,cnt = 0,0,0
for st in range(len(nums)):
    while  en<n and cnt<m :
        cnt+=nums[en]
        en+=1
    if cnt==m:
        answer+=1
    cnt-=nums[st]
print(answer)