import sys
import copy
from collections import deque
arr = [[None]*4 for i in range(4)]
d=[[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]]
result = 0
def find_fish(arr,idx):
    for i in range(4):
        for j in range(4):
            if arr[i][j][0]==idx:
                return (i,j)
    return None

def fish_move(arr,n_x,n_y): # 전체 물고기 이동
    for i in range(1,17):
        pos = find_fish(arr,i)
        if pos!=None:
            x,y = pos[0],pos[1]
            direction = arr[x][y][1]
            for j in range(8):
                dx,dy = x+d[direction][0],y+d[direction][1]
                if 0<=dx<4 and 0<=dy<4:
                    if not (dx==n_x and dy==n_y):
                        arr[x][y][1] = direction
                        arr[x][y],arr[dx][dy] = arr[dx][dy],arr[x][y]
                        break
                direction=(direction+1)%8

def all_possible(arr,c_x,c_y): #먹을수 있는 물고기 좌표 추출
    position = []
    direction = arr[c_x][c_y][1]
    for i in range(4):
        c_x+=d[direction][0]
        c_y+=d[direction][1]
        if 0<=c_x<4 and 0<=c_y<4:
            if arr[c_x][c_y][0]!=-1:#좌표에 물고기가 존재
                position.append((c_x,c_y))   
    return position
def dfs(arr,x,y,total):
    global result
    arr = copy.deepcopy(arr)
    total+=arr[x][y][0] #물고기 섭취
    arr[x][y][0] = -1

    fish_move(arr,x,y)
    position = all_possible(arr,x,y)

    if len(position)==0:
        result = max(result,total)
        return
    for next_x,next_y in position: #다음 좌표
        dfs(arr,next_x,next_y,total)

for i in range(4):
    a1,b1,a2,b2,a3,b3,a4,b4 = list(map(int,input().split()))
    arr[i][0]=[a1,b1-1]
    arr[i][1]=[a2,b2-1]
    arr[i][2]=[a3,b3-1]
    arr[i][3]=[a4,b4-1]
dfs(arr,0,0,0)
print(result)