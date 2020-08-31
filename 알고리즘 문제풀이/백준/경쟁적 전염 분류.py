#링크: https://www.acmicpc.net/problem/18405
from collections import deque
import sys

n,k = map(int,sys.stdin.readline().rstrip().split(" "))
board = []
for i in range(n):
    board.append(list(map(int,sys.stdin.readline().rstrip().split(" "))))
s,x,y = map(int,sys.stdin.readline().rstrip().split(" ")) #s초, x,y좌표
q,cur,d=[],0,[[0,-1],[-1,0],[0,1],[1,0]]
for i in range(n):
    for j in range(n):
        if board[i][j]!=0:
            q.append([i,j,board[i][j]])
q = deque(sorted(q,key=lambda x: x[2]))
while len(q) and cur<s:
    for i in range(len(q)):
        tx,ty,virus=q.popleft()
        for j in range(0,4):
            dx,dy = tx+d[j][0],ty+d[j][1]
            if(0<=dx<n and 0<=dy<n and board[dx][dy]==0):
                board[dx][dy]=virus
                q.append([dx,dy,virus])
    cur+=1
if(board[x-1][y-1]==0):
    print(0)
else:
    print(board[x-1][y-1])


