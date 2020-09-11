#지능형 기차 문제 링크: https://www.acmicpc.net/problem/2455
import sys
from collections import deque
input = sys.stdin.readline
q,r = deque([0]),0
for i in range(4):
    x,y = map(int,input().split())
    if(i==0):
        tmp = q.popleft()+y
        q.append(tmp)
        r = max(tmp,r)
    elif(i==3):
        tmp = q.popleft()-x
        q.append(tmp)
        r = max(tmp,r)
    else:
        tmp = q.popleft() + y - x
        q.append(tmp)
        r = max(tmp,r)
print(r)