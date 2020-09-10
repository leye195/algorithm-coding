from itertools import product
import sys

n,m = map(int,sys.stdin.readline().split())
data = list(product([i for i in range(n+1)],repeat=m))
answer = 0
for i in data:
    if sum(i)==n:
        answer+=1
        answer%=1000000000
print(answer)