import sys
n = int(sys.stdin.readline())
data = []
for i in range(n):
    data.append(list(map(str,sys.stdin.readline().split())))
data=sorted(data,key=lambda x: ((-int(x[1])), int(x[2]), (-int(x[3])), x[0]))
for v in data:
    print(v[0])
