import sys
input = sys.stdin.readline

INF = int(1e9)
n,m = map(int,input().split())
dist=[[0]*n for i in range(n)]
for i in range(m):
    a,b = map(int,input().split())
    dist[a-1][b-1]=1

for k in range(n):
    for i in range(n):
        for j in range(n):
            if(dist[i][k] and dist[k][j]):
                dist[i][j]=1
answer = 0
for i in range(n):
    tmp = 0
    for j in range(n):
        if i!=j and dist[i][j]==0 and dist[j][i]==0:
            tmp+=1
    if tmp==0:
        answer+=1
print(answer)