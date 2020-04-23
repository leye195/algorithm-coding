def solution(matrix):
    bound=len(matrix)-1
    for i in range(bound):
        for j in range(bound-i):
            matrix[i][j],matrix[bound-j][bound-i]=matrix[bound-j][bound-i],matrix[i][j]
    for j in range(bound+1):
        for i in range((bound+1)//2):
            matrix[i][j],matrix[bound-i][j]=matrix[bound-i][j],matrix[i][j]
    for item in matrix:
        print(item)


solution([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])