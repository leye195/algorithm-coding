def solution(grid):
    n,m=len(grid),len(grid[0])
    dp=[[0 for i in range(m)] for j in range(n)]
    for i in range(n):
        for j in range(m):
            if i==0 and j==0:
                dp[i][j]=grid[i][j]
            elif i==0 and j!=0:
                dp[i][j]=grid[i][j]+dp[i][j-1]
            elif i!=0 and j==0:
                dp[i][j]=grid[i][j]+dp[i-1][j]
            else:
                dp[i][j]=min(dp[i-1][j]+grid[i][j],dp[i][j-1]+grid[i][j])
    return dp[n-1][m-1]