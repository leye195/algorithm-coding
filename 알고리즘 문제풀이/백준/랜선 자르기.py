#이분탐색 활용 최댓값이나 최솟값 찾기 
k,n = map(int,input().split(" "))
lines,answer = [],0
for i in range(k):
    lines.append(int(input()))
maxLength = max(lines)
minLength = 1

while(minLength<=maxLength):
    mid,cnt= (minLength+maxLength)//2,0
    for line in lines:
        cnt+=line//mid
    if(cnt<n):
        maxLength = mid-1
    else:
        answer = max(answer,mid)
        minLength = mid+1
print(answer)

    
            