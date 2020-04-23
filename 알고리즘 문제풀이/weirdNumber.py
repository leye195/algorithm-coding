#Weird Numbers
#Sum of its proper divisors (i.e. less than N ) is greater than the number.
#No subset of its divisors sum to N.
#?????왜 틀리는지 모르겠음 
#계속 시간 초과함
from itertools import combinations
from math import sqrt
def isSubSum(d,sum): 
    sub=[[0 for i in range(len(d))] for i in range(sum+1)]
    for i in range(0,sum+1):
        sub[i][0]=0
    for i in range(0,len(d)):
        sub[0][i]=1
    for i in range(1,sum+1):
        for j in range(1,len(d)):
            sub[i][j]=sub[i][j-1]
            if(i>=d[j]):
                sub[i][j]=sub[i][j] or sub[i-d[j]][j-1]
    return sub[sum][len(d)-1]
        
def get_divisors(num):
    d=[1]
    for i in range(2,int(sqrt(num))+1):
        if num%i==0:
            d.extend([i,num//i])
    return list(set(d))
def solution(num):
    divisors=get_divisors(num)    
    if(sum(divisors)<=num):
        return "not weird"
    if(isSubSum(divisors,num)):
        return "not weird"
    else:
        return "weird"
n=int(input())
for i in range(0,n):
    m=int(input())
    print(solution(m))