#링크: https://www.acmicpc.net/problem/18428
import sys
from collections import deque
from itertools import combinations
n = int(sys.stdin.readline())
board,teachers,spaces,find = [],[],[],False
def watch(x,y,d):
    if d==0:
        while y>=0:#left
            if board[x][y]=="S":
                return True
            if board[x][y]=="O":
                return False
            y-=1
    if d==1: #down
        while x<n:#left
            if board[x][y]=="S":
                return True
            if board[x][y]=="O":
                return False
            x+=1
    if d==2: #right
        while y<n:#left
            if board[x][y]=="S":
                return True
            if board[x][y]=="O":
                return False
            y+=1
    if d==3: #top
        while x>=0:#left
            if board[x][y]=="S":
                return True
            if board[x][y]=="O":
                return False
            x-=1
    return False
def check():
    for x,y in teachers:
        for i in range(4):
            if(watch(x,y,i)):
                return True
    return False

for i in range(n):
    board.append(sys.stdin.readline().rstrip().split(" "))
    for j in range(n):
        if board[i][j]=="T":
            teachers.append([i,j])
        elif board[i][j]=="X":
            spaces.append([i,j])
for data in combinations(spaces,3): #장애물 좌표 조합
    for x,y in data: #장애물 배치
        board[x][y] = "O"
    if not check(): #발견되는지 안되는지 체크
        find = True
        break
    for x,y in data:
        board[x][y] = "X"
if(find):# 발견 못함
    print("YES")
else: # 발견함
    print("NO")
