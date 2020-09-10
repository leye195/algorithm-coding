#링크: https://www.acmicpc.net/problem/10159
import sys
input = sys.stdin.readline
n = int(input())
m = int(input())
dist = [[0]*n for i in range(n)]
for i in range(m):
    x,y = map(int,input().split())
    dist[x-1][y-1]=1
for k in range(n):
    for i in range(n):
        for j in range(n):
            if(dist[i][k] and dist[k][j]):#i와k,k와j 비교가능
                dist[i][j] = 1 #i,j 비교가능

for i in range(n):
    cnt = 0
    for j in range(n):
        if i!=j and dist[i][j]==0 and dist[j][i]==0: #i와j는 비교 불가
            cnt+=1
    print(cnt)
