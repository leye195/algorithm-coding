import sys

def solution(n):
    dp=[0]*11
    dp[0],dp[1],dp[2] = 1,1,2
    for i in range(3,n+1):
        dp[i]=dp[i-3]+dp[i-2]+dp[i-1]
    print(dp[n])

t = int(sys.stdin.readline())
for i in range(t):
    n = int(sys.stdin.readline())
    solution(n)

