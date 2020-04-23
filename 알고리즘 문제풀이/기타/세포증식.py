def solution(n,d):
    flag,cnt=0,0
    while True:
        #왼쪽으로 이동    
        d[1-flag][n-2]=d[flag][n-1] 
        for i in range(n-4,-1,-2):
            d[1-flag][i]=d[flag][i+1]-d[1-flag][i+2]
        j=0
        #오른쪽으로 이동
        d[1-flag][j]=d[flag][0]-d[1-flag][1-j]
        for i in range(j+2,n,2):
            d[1-flag][i]=d[flag][i-1]-d[1-flag][i-2]
        cnt+=1
        flag=1-flag
        print(d[flag])
        for i in d[flag]:
            if i<0:
                break

        