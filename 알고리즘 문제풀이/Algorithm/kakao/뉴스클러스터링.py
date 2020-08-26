#J(A,B): A,B의 교집합 크기를 두 집함의 합집합 크기로 나눈 값으로 정의
#ex) A={1,2,3}, B={2,3,4} J(A,B)=2/4=0.5
#A,B 모두 공집합인 경우 J(A,B)=1
#A,B는 다중집합,
#A ∩ B는 원소 1을 min(3, 5)인 3개
#A ∪ B는 원소 1을 max(3, 5)인 5개 
from collections import defaultdict
def f1(d1,d2):#합집합,크기 반환  (d={**d1,**d2})
    d=defaultdict(int)
    for key in d1.keys():
        if key in d2.keys():
            d[key]=max(d1[key],d2[key])
        else:
            d[key]=d1[key]
    for key in d2.keys():
        if key not in d1.keys():
            d[key]=d2[key]
    cnt=0
    for val in d.values():
         cnt+=val   
    return cnt
def f2(d1,d2):#교집합,크기 반환
    d=defaultdict(int)
    for key in d1.keys():
        if key in d2.keys():
            d[key]=min(d1[key],d2[key])
    cnt=0
    for val in d.values():
        cnt+=val
    return cnt
def solution(str1, str2):
    d1,d2=defaultdict(int),defaultdict(int)
    for i in range(0,len(str1)-1):
        tmp=str1[i:i+2].upper()
        if tmp.isalpha():
            d1[tmp]+=1
    for i in range(0,len(str2)-1):
        tmp=str2[i:i+2].upper()
        if tmp.isalpha():
            d2[tmp]+=1
    c1=f1(d1,d2) #합집합 크기
    c2=f2(d1,d2) #교집합 크기
    if c1==0 and c2==0: #공집합인 경우
        return 65536
    return int((c2/c1)*65536)