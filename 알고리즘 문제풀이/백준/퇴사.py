import sys
n = int(sys.stdin.readline())
T,P,dp=[],[],[0]*(n+1)
for i in range(n):
    t,p = map(int,sys.stdin.readline().split(" "))
    T.append(t)
    P.append(p)
answer = 0
for i in range(n-1,-1,-1):
    time=T[i]+i #끝나는 시간
    if time<=n:
        dp[i]=max(P[i]+dp[time],answer)
        answer = dp[i]
    else:
        dp[i] = answer
print(max(dp))
#50 10 20 
#50 10 30
