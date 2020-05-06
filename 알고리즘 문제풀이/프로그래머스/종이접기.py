#통과는 했지만 너무 어렵게 생각함
#쉽게 풀수있는 방법을 생각해보자..
def solution(n):
    if n==1:
        return [0]
    if n==2:
        return [0,0,1]   
    answer,cnt = [0,0,1],3
    for i in range(3,n+1):
        cnt = cnt + 2**(i-1)
        tmp,flag,idx = [0] * cnt,False,0
        for j in range(0,len(tmp)):
            if j%2==0:
                if flag:
                    tmp[j]=1
                else:
                    tmp[j]=0
                flag = not flag
            else:
                tmp[j]=answer[idx]
                idx+=1
        answer = tmp
    return answer

#xor을 활용한 풀이
def solution2(n):
    answer = [0]
    for i in range(0,n-1):
        answer = answer + [0] + [bit^1 for bit in answer[::-1]]
    return answer

