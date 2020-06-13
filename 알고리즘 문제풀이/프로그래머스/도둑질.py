def solution(money):
    dp = [[j for j in money]for i in range(2)]
    dp[0][0],dp[0][1]=money[0],money[0] #0번째 집 먼저 방문 한 경우
    dp[1][0],dp[1][1]=0,money[1]    #1번째 집 먼저 방문 한 경우
    for i in range(2,len(money)-1):
        dp[0][i]=max(dp[0][i-2]+money[i],dp[0][i-1])
    for i in range(2,len(money)):
        dp[1][i] = max(dp[1][i-2]+money[i],dp[1][i-1])
    return max(max(dp[0]),max(dp[1]))