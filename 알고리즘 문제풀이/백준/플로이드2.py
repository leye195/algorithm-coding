import sys
from collections import deque
INF = int(1e9)
input = sys.stdin.readline
n = int(input())
m = int(input())
dp = [[INF]*(n+1) for i in range(n+1)]
records=[[-1]*(n+1) for i in range(n+1)]
def make_path(u,v,arr):
    if dp[u][v]==INF:
        return
    if records[u][v]==-1:
        arr.append(u)
        if(u!=v):
            arr.append(v)
        return
    make_path(u,records[u][v],arr)
    arr.pop()
    make_path(records[u][v],v,arr)
for i in range(1,n+1):
    dp[i][i] = 0
for i in range(m):
    a,b,c = map(int,input().split())
    dp[a][b] = min(dp[a][b],c)
for k in range(1,n+1):
    for i in range(1,n+1):
        for j in range(1,n+1):
            if dp[i][j]>dp[i][k]+dp[k][j]:
                dp[i][j] = dp[i][k]+dp[k][j]
                records[i][j]=k 

for i in range(1,n+1):
    print(" ".join(map(str,dp[i][1:])))
for i in range(1,n+1):
    for j in range(1,n+1):
        arr=[]
        make_path(i,j,arr)
        if len(arr)==1:
            print(0)
        else:
            print(len(arr)," ".join(map(str,arr)))