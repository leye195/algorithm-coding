import sys
n,m = map(int,sys.stdin.readline().rstrip().split())
data = list(map(int,sys.stdin.readline().rstrip().split()))
answer,lo,hi = 0,0,max(data)
while(lo<=hi):
    mid,tmp = (lo+hi)//2,0
    for i in data:
        if i>mid:
            tmp+=i-mid
    if tmp>=m:
        answer = max(answer,mid)
        lo = mid+1
    else:
        hi= mid-1
print(answer)


