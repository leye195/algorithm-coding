def solution(matrix):
    n,m=len(matrix),len(matrix[0])
    board=[]
    for i in range(n):
        for j in range(m):
            if matrix[i][j]==0:
                board.append([i,j])
    for p in board:
        for i in range(n):
            matrix[i][p[1]]=0
        for i in range(m):
            matrix[p[0]][i]=0
    return matrix

print(solution([
  [1,1,1],
  [1,0,1],
  [1,1,1]
]))
print(solution([
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]))
