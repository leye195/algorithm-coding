import sys

n = int(sys.stdin.readline())
data = list(map(int,sys.stdin.readline().split()))
dp=[1]*n
for i in range(1,n):
    tmp = data[i]
    for j in range(0,i):
        if data[i]<data[j]:
            dp[i]=max(dp[i],dp[j]+1)
print(dp)

#1 1 1 1 1 1
#1 1 1 1 1 1
#1 1 2 1 1 1
#1 1 2 2 1 1
#1 1 2 2 2 1 
#1 1 2 2 2 3