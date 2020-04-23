"""
1~300

뒤집은 값 = (뒤집은값*진수+(원 제곱 수%진수))
원 제곱수=원 제곱수/진수
"""
def makeReverse(n,b):
    tmp,rev=n,0
    while tmp:
        rev=(rev*b+(tmp%b))
        tmp=tmp//b
    if n==rev:
        return 1
    return 0
def solution(b):
    ans=0
    for i in range(1,301):
        if makeReverse(i*i,b):
            ans+=1
    print(ans)
solution(2)
solution(3)
solution(10)

