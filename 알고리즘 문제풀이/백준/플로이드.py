#문제 링크:https://www.acmicpc.net/problem/11404
import sys
input = sys.stdin.readline
INF = int(1e9) 
n=int(input())
m=int(input())
dist = [[INF]*n for i in range(n)]
for i in range(0,n):
    dist[i][i]=0
for i in range(0,m):
    a,b,c = map(int,input().split())
    dist[a-1][b-1]=min(dist[a-1][b-1],c)
for k in range(n):
    for i in range(n):
        for j in range(n):
            dist[i][j]=min(dist[i][j],dist[i][k]+dist[k][j])
for i in range(n):
    for j in range(n):
        if dist[i][j]==INF:
            print(0,end=" ")
        else:
            print(dist[i][j],end=" ")
    print()
