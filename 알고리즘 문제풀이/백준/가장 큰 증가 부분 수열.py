n = int(input())
arr = list(map(int,input().split(" ")))
dp=[arr[i] for i in range(n)]
for i in range(1,n):
    for j in range(0,i):
        if(arr[i]>arr[j]):
            dp[i]=max(dp[i],arr[i]+dp[j])
print(max(dp))


