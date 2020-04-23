def solution1(matrix,target):
    for i in matrix:
        for j in i:
            if j==target:
                return True
    return False

def solution2(matrix,target):
    for i in matrix:
        if target in i:
            return True
    return False 
print(solution1([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
],13))    
print(solution2([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
],13))