##
# 1. ''.join(sorted(s[i:j+1]))을 이용해 정렬된 문자열을 얻어옴
# 2.dictionary에 key값과 value를 입력해줌 
# ex) s=abba {'a':2,'ab':2,'abb':2,'b':2,'abba':1,'bb':1}
# 3.dictionary의 values 값들을 nC2를 이용하여 c값에 더해줌
# nC2=n(n-1)/2
##
def solution(s):
    c=0
    d={}
    for i in range(0,len(s)):
        for j in range(i,len(s)):
            tmp=''.join(sorted(s[i:j+1]))
            if tmp not in d.keys():
                d[tmp]=1
            else:
                d[tmp]+=1
    for n in d.values():
        c+=(n*(n-1)/2)
    return c