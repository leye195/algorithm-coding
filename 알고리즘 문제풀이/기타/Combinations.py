from itertools import combinations
def solution(n,k):
    return list(combinations([i for i in range(1,n+1)],k))

print(solution(4,2))