import sys
from bisect import bisect_left,bisect_right
data = list(map(int,sys.stdin.readline().split()))
x = int(sys.stdin.readline().rstrip())
le,ri = bisect_left(data,x),bisect_right(data,x)
if ri-le==0:
    print(-1)
else:
    print(ri-le)