def solution(s):
    st=[]
    for i in s:
        if i=="(" or i=="[" or i=="{":
            st.append(i)
        elif i==")":
            if(len(st)>0 and st[-1]=="("):
                st.pop()
            else:
                return "NO"
        elif i=="]":
            if(len(st)>0 and st[-1]=="["):
                st.pop()
            else:
                return "NO"
        elif i=="}":
            if(len(st)>0 and st[-1]=="{"):
                st.pop()
            else:
                return "NO"
    if len(st)>0:
        return "NO"
    return "YES"
n=int(input())
for i in range(0,n):
    s=input()
    print(solution(s))