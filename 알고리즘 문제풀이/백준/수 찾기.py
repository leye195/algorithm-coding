from bisect import bisect_left

n = int(input())
arr = sorted(list(map(int,input().split(" "))))
m = int(input())
items = list(map(int,input().split(" ")))
for i in items:
    tmp = bisect_left(arr,i)
    if(tmp<n):
        if(arr[tmp]==i):
            print(1)
        else:
            print(0)
    else:
        print(0)
