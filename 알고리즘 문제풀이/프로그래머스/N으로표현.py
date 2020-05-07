'''
1번 사용:
5
2번 사용, 55와 1set와 1set 사칙연산:
0(5-5),1(5/5),10(5+5),25(5*5), 55
3번 사용, 555와 1set,2set의 사칙 연산, 2set와 1set의 사칙연산:
4번 사용, 5555와 1set,3set의 사칙연산, 2set와 2set의 사칙연산, 3set와 1set의 사칙
...
n번 사용, 5xN번  1set,n-1set, 2set,n-2set ...... n-1set,1set

주의: -와/의 경우 앞뒤 위치가 바뀌면 값이 달라짐, /는 분모가 0이 될 경우 오류 발생 
'''
def solution(N, number):
    s = [set() for i in range(8) ]
    for i,x in enumerate(s,start=1):
        x.add(int(str(N)*i))
    for i in range(1,8):
        for j in range(0,i):
            for x in s[j]:
                for y in s[i-j-1]: #사칙 연산 진행
                    s[i].add(x*y)
                    s[i].add(x+y)
                    s[i].add(x-y)
                    if y!=0: #분모가 0이 아닌경우
                        s[i].add(x//y)
    for i in range(len(s)):
        if number in s[i]:
            return i+1
    return -1