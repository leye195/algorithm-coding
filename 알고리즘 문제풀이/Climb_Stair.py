def solution(n):
    dp=[1,1]+[0 for i in range(2,n+1)]
    for i in range(2,n+1):
        dp[i]=dp[i-1]+dp[i-2]
    return dp[n]
'''
def solution2(n):
    dp=list(range(1,n+1))
    for i in range(2,n):
        dp[i]=dp[i-1]+dp[i-2]
    return dp[n-1]

'''