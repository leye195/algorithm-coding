from collections import deque
from itertools import combinations
import copy
import sys
def count_space(board):
    cnt = 0
    for i in range(len(board)):
        for j in range(len(board[0])):
            if board[i][j]==0:
                cnt+=1
    return cnt
n,m = map(int,sys.stdin.readline().split(" "))
board,virus,spaces,d = [],[],[],[[-1,0],[0,-1],[1,0],[0,1]]
answer = 0
for i in range(n):
    board.append(list(map(int,sys.stdin.readline().split(" "))))
    for j in range(m):
        if board[i][j]==2:
            virus.append([i,j])
        if board[i][j]==0:
            spaces.append([i,j])

for data in combinations(spaces,3):
    tmp_board = copy.deepcopy(board)
    for x,y in data:
        tmp_board[x][y]=1
    q=deque(virus)
    while(len(q)):
        vx,vy = q.popleft()
        for i in range(0,4):
            dx,dy = vx+d[i][0],vy+d[i][1]
            if 0<=dx<n and 0<=dy<m and tmp_board[dx][dy]==0:
                tmp_board[dx][dy]=2
                q.append([dx,dy])
    answer=max(answer,count_space(tmp_board))
    for x,y in data:
        tmp_board[x][y]=0
print(answer)
