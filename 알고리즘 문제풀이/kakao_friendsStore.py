from math import sqrt
def getAns(n,k,d):
    ans=1
    m=sum(d)/n
    for i in range(0,n-k+1):
        t=0
        for j in d[i:i+k]:
            t=t+((j-m)**2)
        t/=k
        ans=min(ans,sqrt(t))
        #print(ans)
    print(round(ans,11))

getAns(5,3,[1,2,3,4,5])
getAns(10,3,[1,4,1,5,9,2,6,5,3,5])
        