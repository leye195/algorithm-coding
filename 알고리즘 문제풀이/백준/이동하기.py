import sys
n,m = map(int,sys.stdin.readline().split(" "))
board,dp = [],[[0]*m for i in range(n)]
for i in range(n):
    board.append(list(map(int,sys.stdin.readline().split(" "))))
#(0,0)->(n-1,m-1)
dp[0][0] = board[0][0]
for i in range(1,m):
    dp[0][i]=max(dp[0][i-1]+board[0][i],dp[0][i])
for i in range(1,n):
    dp[i][0]=max(dp[i-1][0]+board[i][0],dp[i][0])
for i in range(1,n):
    for j in range(1,m):
        dp[i][j]=max(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+board[i][j]
print(dp[n-1][m-1])
