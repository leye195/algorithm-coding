"""
d[1] 1*2+1*2=4  
d[2] 2*2+1*2=6  
d[3] 3*2+2*2=10 => (1+2)*2+2*2  
d[4] 5*2+3*2=16 => (3+2)*2+3*2
d[5] 8*2+5*2=26 => (5+3)*2+5*2
.
.
.
d[N]=max(t[:i+1])*2+(t[i-1]+t[i])*2
"""
def solution(N):
    t=[0 for i in range(81)]
    t[1],t[2]=1,1
    for i in range(3,81):
        t[i]=t[i-1]+t[i-2]
    dp=[0 for i in range(N+1)]
    for i in range(1,N+1):
        dp[i]=(max(t[:i+1])*2)+((t[i-1]+t[i])*2)
    return dp[N]