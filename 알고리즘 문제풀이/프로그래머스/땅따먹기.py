def solution(land):
    dp = [[0 for j in range(len(land[0]))] for i in range(len(land))]
    for i in range(len(land[0])):
        dp[0][i]=land[0][i]
    for i in range(1,len(land)):
        for j in range(len(land[0])):#
            for k in range(len(land[0])):
                if(j!=k):
                    dp[i][j] = max(dp[i][j],dp[i-1][k]+land[i][j])
    return max(dp[len(land)-1])