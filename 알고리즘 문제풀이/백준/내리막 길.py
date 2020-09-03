import sys
from collections import deque
sys.setrecursionlimit(10000)
def dfs(board,x,y):
    if x==n-1 and y==m-1:
        return 1
    if dp[x][y]!=-1:
        return dp[x][y]
    dp[x][y]=0
    if x-1>=0 and board[x][y]>board[x-1][y]:
        dp[x][y]+=dfs(board,x-1,y)
    if y-1>=0 and board[x][y]>board[x][y-1]:
        dp[x][y]+=dfs(board,x,y-1)
    if x+1<n and board[x][y]>board[x+1][y]:
        dp[x][y]+=dfs(board,x+1,y)
    if y+1<m and board[x][y]>board[x][y+1]:
        dp[x][y]+=dfs(board,x,y+1)
    return dp[x][y]
n,m = map(int,sys.stdin.readline().split())
board,d = [],[[0,1],[1,0],[0,-1],[-1,0]]
dp=[[-1]*m for i in range(n)]
for i in range(n):
    board.append(list(map(int,sys.stdin.readline().split())))
print(dfs(board,0,0))