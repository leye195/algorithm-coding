import sys
INF = int(1e9)
input = sys.stdin.readline

n,m,r = map(int,input().split())
items = list(map(int,input().split()))
dp=[[INF]*n for i in range(n)]
for i in range(n):
    dp[i][i] = 0
for i in range(r):
    a,b,c = map(int,input().split())
    dp[a-1][b-1]=c
    dp[b-1][a-1]=c

for k in range(n):
    for i in range(n):
        for j in range(n):
            dp[i][j]=min(dp[i][j],dp[i][k]+dp[k][j])
answer = 0
for i in range(n):
    tmp = 0
    for j in range(n):
        if dp[i][j]!=INF and dp[i][j]<=m:
            tmp+=items[j]
    answer = max(answer,tmp)
print(answer)