def palindromeMax(s,st,en):
    le,ri = st,en
    while(le>=0 and ri<len(s)):
        if(s[le]!=s[ri]):
            break
        le-=1
        ri+=1
    return ri-le-1
def solution(s):
    answer = 1
    if len(s)==0:
        return 0
    if len(s)==1:
        return 1
    for i in range(len(s)-1,-1,-1):
        answer = max(answer,palindromeMax(s,i,i))
        answer = max(answer,palindromeMax(s,i,i+1))
    return answer