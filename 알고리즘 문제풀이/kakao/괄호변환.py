#균형 잡힌 괄호: ( 와 )의 갯수가 같음
from collections import defaultdict
def f(s1): #올바른 괄호 체크
    st,f=[],1
    for s in s1:
        if s=='(':
            st.append(s)
        else:
            if len(st)>0:
                st.pop(0)
            else:
                return 0
    if len(st)>0:
        return 0
    else:
        return 1
def solution(p):
    answer = ''
    if len(p)>0: #1
        if f(p):
            return p
        else: 
            d=defaultdict(int) #2
            s1,s2="",""
            for i in range(len(p)):
                d[p[i]]+=1
                if d['(']==d[')']:
                    s1=p[:i+1]
                    s2=p[i+1:]
                    break
            #3 u가 "올바른 괄호 문자열"일 경우
            if(f(s1)):
                answer+=s1
                tmp=solution(s2)
                answer+=tmp #3-1
            #4 u가 "올바른 괄호 문자열"이 아닐경우
            else:
                #4-1~4-3
                tmp1="("
                tmp1+=solution(s2)
                tmp1+=')'
                #4-4
                for i in range(1,len(s1)-1):
                    if(s1[i]=='('):
                        tmp1+=')'
                    else:
                        tmp1+='('
                #4-5
                answer=tmp1
    return answer