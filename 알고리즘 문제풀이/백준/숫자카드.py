from bisect import bisect_left
from collections import Counter
n = int(input())
cards = Counter(sorted(list(map(int,input().split(" ")))))
m = int(input())
targets,answer = list(map(int,input().split(" "))),[0 for i in range(m)]

for i in range(m):
    if targets[i] in cards:
        answer[i]=cards[targets[i]]
print(" ".join(map(str,answer)))



