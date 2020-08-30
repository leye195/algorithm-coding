def solution(n):
    dp=[0 for i in range(0,91)]
    dp[0],dp[1]=0,1
    for i in range(2,n+1):
        dp[i]=dp[i-1]+dp[i-2]
    print(dp[n])

n = int(input())
solution(n)