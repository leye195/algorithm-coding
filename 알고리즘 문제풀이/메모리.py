def solution(e,f,n,p,w):
    r=f-e #total memory - memory of OS
    s=[1000000 for i in range(0,n+1)]
    s[0]=0
    for i in range(n):
        for j in range(r-w[i]):
            if s[j]+p[i]<s[j+w[i]]:
                s[j+w[i]]=s[j]+p[i]


