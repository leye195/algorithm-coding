def solution(s):
    n=len(s)
    a,b,c=1,1,1
    if s[0]=='0':
        return 0
    for i in range(2,n+1):
        if s[i-1]=='0':
            b=0
        if int(s[i-2]+s[i-1])<27:
            c=a+b
        else:
            c=b
        a=b
        b=c
    return c