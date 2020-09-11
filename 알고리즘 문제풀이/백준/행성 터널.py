#행성 터널 문제 링크: https://www.acmicpc.net/problem/2887
import sys
import heapq
input = sys.stdin.readline
def find(p,x):
    if p[x]!=x:
        p[x]=find(p,p[x])
    return p[x]

def union(p,x,y):
    x,y = find(p,x),find(p,y)
    if x<y:
        p[y]=x
    else:
        p[x]=y

n = int(input())
r,v,e,p=0,[],[],[0]*n
x,y,z=[],[],[]
for i in range(n):
    p[i]=i

for i in range(n):
    data = list(map(int,input().split()))
    x.append((data[0],i))
    y.append((data[1],i))
    z.append((data[2],i))
    # cost가 min(|xA-xB|, |yA-yB|, |zA-zB|) 이기 때문에 x,y,z 따로 저장
x.sort()
y.sort()
z.sort()

for i in range(0,n-1):
    heapq.heappush(e,(x[i+1][0]-x[i][0],x[i][1],x[i+1][1]))
    heapq.heappush(e,(y[i+1][0]-y[i][0],y[i][1],y[i+1][1]))
    heapq.heappush(e,(z[i+1][0]-z[i][0],z[i][1],z[i+1][1]))

while e: #크루스칼 활용, 최소 신장 트리 계산
    cost,x,y = heapq.heappop(e)
    if find(p,x)!=find(p,y):
        union(p,x,y)
        r+=cost
print(r)