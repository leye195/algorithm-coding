from itertools import permutations
from collections import deque
import sys
n = int(sys.stdin.readline())

nums=list(map(int,sys.stdin.readline().rstrip().split(" ")))
plus,minus,multi,div = map(int,input().split(" "))
max_n,min_n= -1e9,1e9
total =  plus+minus+multi+div
p = list(permutations(["+" for i in range(plus)]+["-" for i in range(minus)]+["*" for i in range(multi)]+["/" for i in range(div)],total))
for data in p:   
    f,q,op = "",deque(),None
    for i in range(len(nums)):
        if(i<len(data)):
            f=f+str(nums[i])+data[i]
        else:
            f+=str(nums[i])
    for v in f:
        if v!="+" and v!="-" and v!="/" and v!="*":
            q.append(int(v))
        else:
            op=v
        if len(q)>=2:
            n1,n2 = q.popleft(),q.popleft()
            if op=="+":
                q.append(n1+n2)
            elif op=="-":
                q.append(n1-n2)
            elif op=="*":
                q.append(n1*n2)
            elif op=="/":
                if n2!=0:
                    q.append(int(n1/n2))
    tmp = q.popleft()
    min_n,max_n = min(min_n,tmp),max(max_n,tmp)
print(max_n)
print(min_n)