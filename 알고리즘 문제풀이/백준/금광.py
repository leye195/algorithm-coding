n,m = map(int,input().split(" "))
mp,answer=[],0
dp=[[0]*m for i in range(n)]
for i in range(n):
    mp.append(list(map(int,input().split(" "))))
    dp[i][0]=mp[i][0]

for i in range(1,m):
    for j in range(0,n):
        if j==0:
            dp[j][i] = max(dp[j][i-1]+mp[j][i],dp[j+1][i-1]+mp[j][i])
        elif j==n-1:
            dp[j][i] = max(dp[j][i-1]+mp[j][i],dp[j-1][i-1]+mp[j][i])
        else:
            dp[j][i] =max(dp[j+1][i-1]+mp[j][i],max(dp[j][i-1]+mp[j][i],dp[j-1][i-1]+mp[j][i]))
for i in range(0,n):
    answer = max(answer,dp[i][m-1])
print(answer)