from math import pow
def solution(x,n):
    return x**n
def solution1(x,n):
    return pow(x,n)
    
#time limited
def solution2(x,n):
    if n==0:
        print(1)
    elif n<0:
        a=x
        b=1.0
        n*=-1
        for i in range(n-1):
            a*=x
        print(b/a)
        return b/a
    else:
        a=1
        for i in range(n):
            a*=x
        print(a)
        return a