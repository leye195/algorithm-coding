def solution(d,f,t):
    dp=[[0]*(t+1) for _ in range(d+1)]
    dp[0][0]=1
    for i in range(d+1):
        for j in range(t+1):
            dp[i][j]=sum(dp[i-1][j-k] for k in range(1,f+1) if j-k>=0)
    return dp[-1][-1]%(10**9+7)