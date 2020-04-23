"""
기약분수: 분모와 분자가 1이외의 공통된 약수로 더이상 나눠지지 않는 형태를 말한다.
즉,분수 a/b가 기약분수라는 것은 a,b의 최대공약수가 1이라는 것을 말함
조건: a<b and gcd(a,b)==1
"""
def gcd(x,y):
    if y==0:
        return x
    return gcd(y,x%y)
def solution(n):
    r=[]
    for i in range(0,n+1):
        for j in range(1,n+1):
            if gcd(i,j)==1:
                if [min(i,j),max(i,j)] not in r:
                    r.extend([[min(i,j),max(i,j)]])
    for i in r:
        print("찾은 기약분수: "+str(i[0])+"/"+str(i[1]))
    print(len(r))
solution(5)
solution(10)
solution(15)