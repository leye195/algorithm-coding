import sys

n = int(sys.stdin.readline())
data,dp=[],[[0]*n for i in range(n)]
for i in range(n):
    data.append(list(map(int,sys.stdin.readline().split(" "))))
dp[0][0] = data[0][0]
for i in range(1,n):
    for j in range(0,len(data[i])):
        if j==0:
            dp[i][j]=max(dp[i][j],dp[i-1][0]+data[i][0])
        elif j==len(data[i])-1:
            dp[i][j]=max(dp[i][j],dp[i-1][j-1]+data[i][len(data[i])-1])
        else:
            dp[i][j]=max(dp[i][j],max(dp[i-1][j-1]+data[i][j],dp[i-1][j]+data[i][j]))
print(max(dp[n-1]))