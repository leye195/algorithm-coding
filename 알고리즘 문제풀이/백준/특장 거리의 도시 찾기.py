#링크: https://www.acmicpc.net/problem/18352
import sys
from collections import deque
n,m,k,x = map(int,sys.stdin.readline().rstrip().split(" "))
#board,visited = {},[0 for i in range(n+1)]
board,visited = [[] for i in range(n+1)],[0]*(n+1)
answer = []
for i in range(m):
    u,v = map(int,sys.stdin.readline().rstrip().split(" "))
    board[u].append(v)
q=deque([x]) 
visited[x]=1

while len(q):
    tmp = q.popleft()
    if visited[tmp]==k+1:
        answer.append(tmp)
    for i in board[tmp]:
        if visited[i]==0:
            q.append(i)
            visited[i]=visited[tmp]+1
if len(answer):
    answer = sorted(answer)
    for i in answer:
        print(i)
else:
    print(-1)

'''
while len(q):
    tx = q.popleft()
    if tx in board:
        for i in board[tx]:
            if  visited[i]==0:
                visited[i]=1
                answer[i]=answer[tx]+1
                q.append(i)
if k in answer:
    for i in range(len(answer)):
        if answer[i]==k:
            print(i)
else:
    print(-1)
'''