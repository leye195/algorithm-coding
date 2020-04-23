def solution(s):
    res=[]
    getAns(s,0,4,"",res)
    return res 

def getAns(s,idx,parts,st,res):
    if idx>len(s):
        return
    if parts>1:
        for i in range(1,4):
            part=s[idx:idx+i]
            if part.isdigit() and 0<=int(part)<=255 and part==str(int(part)):
                getAns(s,idx+i,parts-1,st+part+'.',res)
    else:
        if s[idx:].isdigit() and 0<=int(s[idx:])<=255 and str(int(s[idx:]))==s[idx:]:
            res.append(st+s[idx:])
        return 

print(solution("25525525525"))