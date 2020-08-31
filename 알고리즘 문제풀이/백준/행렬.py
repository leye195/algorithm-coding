#https://www.acmicpc.net/problem/1080
n,m = map(int,input().split(" "))
answer,a,b = 0,[],[]
visited=[[0 for j in range(m)] for i in range(n)]
def checkSame(a,b,n,m):
    for i in range(n):
        for j in range(m):
            if a[i][j]!=b[i][j]:
                return False
    return True
for i in range(n):
    a.append(list(str(input())))
for i in range(n):
    b.append(list(str(input())))
for i in range(0,n-2):
    for j in range(0,m-2):
        if(a[i][j]!=b[i][j]):
            answer+=1
            for k in range(i,i+3):
                for l in range(j,j+3):
                    if k<n and l<m:
                        if(a[k][l]=="0"):
                            a[k][l]="1"
                        else:
                            a[k][l]="0"
if(checkSame(a,b,n,m)):
    print(answer)
else:
    print(-1)