#https://www.acmicpc.net/problem/2839
n = int(input())
answer = -1
for w in range(0,(5*(n//5))+1,5):#0,5*1,5*2,5*3 ~ 5*n
    if(n-w>=0 and (n-w)%3==0):
        tmp = w//5+(n-w)//3
        if(answer==-1):
            answer = tmp
        else:
            answer = min(answer,tmp)
print(answer)
    






