def solution(obstacle):
    n,m=len(obstacle),len(obstacle[0])
    dp=[[0 for i in range(m)] for j in range(n)]
    for i in range(n):
        for j in range(m):
            if(obstacle[i][j]==0):
                if(i==0 and j==0):
                    dp[i][j]=1
                elif(i==0 and j!=0):
                    dp[i][j]=dp[i][j-1]
                elif(i!=0 and j==0):
                    dp[i][j]=dp[i-1][j]
                else:
                    dp[i][j]=dp[i-1][j]+dp[i][j-1]
    return dp[n-1][m-1]
    