#F(i,n)=G(i-1)*G(n-i)
#G(n) = Σ(i = 1 to n) G(i - 1) * G(n - i)
#when i is root, there i-1 nodes to left and n-i nodes to right
#ex) when root=3 n=5
# 2 nodes to left and 2 nodes to right
'''
n=3
G(3)=F(1,3)+F(2,3)+F(3,3)
=G(0)*G(2)+G(1)*G(1)+G(2)*G(0)
=2+1+2=5
'''
def solution(n):
    dp=[1,1]+[0 for i in range(2,n+1)]
    if n==0 or n==1:
        return 1
    for i in range(2,n+1):
        s=0
        for root in range(i,0,-1):
            s+=dp[root-1]*dp[i-root]
        dp[i]=s
    return dp
def solution1(n):
    dp=[0]*(n+1)
    dp[0],dp[1]=1,1
    for i in range(2,n+1):
        for j in range(1,i+1):
            dp[i]+=dp[j-1]*dp[i-j]
    return dp[n]

print(solution(5))
print(solution1(5))