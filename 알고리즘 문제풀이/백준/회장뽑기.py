#회장뽑기 링크:https://www.acmicpc.net/problem/2660
import sys 
import heapq
input = sys.stdin.readline
INF = int(1e9)
n = int(input())
dist = [[INF]*n for i in range(n)]
for i in range(n):
    dist[i][i]=0
while True:
    a,b = map(int,input().split())
    if a==-1 and b==-1:
        break
    dist[a-1][b-1]=1
    dist[b-1][a-1]=1

#플로이드 워셜
for k in range(n):
    for i in range(n):
        for j in range(n):
            dist[i][j] = min(dist[i][j],dist[i][k]+dist[k][j])

h,min_value,result = [],INF,[]
for i in range(len(dist)):
    heapq.heappush(h,(max(dist[i]),i))
#우선순위 큐 활용 최소 점수 추출 및 후보 리스트 수집
while h:
    v,idx = heapq.heappop(h)
    if min_value>=v:
        min_value = v
        result.append(idx+1)
print(min_value,len(result))
print(" ".join(map(str,result)))