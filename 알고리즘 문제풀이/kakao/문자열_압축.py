# 문자열을 n/2개 이상으로 자를 경우 압축이 안됨
# stack이용 
# top에 있는 문자열과 현재 문자열이 같을 경우:
# stack에 문자열 push
# top과 현재 문자열이 다를 경우:
# stack 크기와 top문자열을 조합후 st을 비워주고 다음 문자열 추가
#   cnt=len(stack),word=st[-1]
def solution(s):
    answer,st, s_len = len(s),[],len(s)
    for i in range(1,(s_len//2)+1):
        st,ss,tmp=[],s[:],""
        while len(ss)>0:
            if len(st)==0:
                st.append(ss[:i])
            else:
                if st[-1]==ss[:i]:
                    st.append(ss[:i])
                else:
                    cnt,word=len(st),st[-1]
                    if cnt!=1:
                        tmp+=str(cnt)
                    tmp+=word
                    st=[]
                    st.append(ss[:i])
            ss=ss[i:]
        if len(st)>0:
            cnt,word=len(st),st[-1]
            if cnt!=1:
                tmp+=str(cnt)
            tmp+=word
            st=[]
        answer=min(answer,len(tmp))
    return answer