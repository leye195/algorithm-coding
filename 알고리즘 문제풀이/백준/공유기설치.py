#문제 링크: https://www.acmicpc.net/problem/2110
n,c = map(int,input().split(" "))
answer,house=0,[]
for i in range(n):
    house.append(int(input()))
house = sorted(house)
lo,hi = 1,max(house)
while(lo<=hi):
    mid,cnt,cur = (lo+hi)//2,1,house[0]
    for i in house:
        if i-cur>=mid:
            cur = i
            cnt+=1
    if cnt>=c:
        answer = mid
        lo = mid+1
    else:
        hi = mid-1
print(answer)
