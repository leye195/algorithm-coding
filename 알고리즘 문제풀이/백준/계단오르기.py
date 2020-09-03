import sys
#LIS 활용 문제 
n = int(sys.stdin.readline())
data = list(map(int,sys.stdin.readline().split(" ")))
dp=[1]*n
for i in range(0,n):
    for j in range(0,i):
        if(data[i]<data[j]):
            dp[i]=max(dp[i],dp[j]+1)
print(n-max(dp))
