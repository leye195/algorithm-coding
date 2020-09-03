import sys
INF = 10001
n,m = map(int,sys.stdin.readline().split(" "))
coins,dp=[],[INF]*(m+1)
dp[0]=0
for i in range(n):
    coins.append(int(sys.stdin.readline()))

#if dp[i-k] exist -> dp[i]=min(dp[i],dp[i-k]+1)
for coin in coins:
    for j in range(coin,m+1):
        if dp[j-coin]!=INF:
            dp[j] = min(dp[j],dp[j-coin]+1)
if dp[m]==INF:
    print(-1)
else:      
    print(dp[m])