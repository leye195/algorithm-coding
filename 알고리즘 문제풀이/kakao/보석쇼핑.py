def solution(gems):
    answer,st,en,d = None,0,0,{}
    s=set([i for i in gems])
    while(st<=en and en<len(gems)):
        if(len(d.keys())==len(s)):
            d[gems[st]]-=1
            if(d[gems[st]]==0): 
                d.pop(gems[st],None)
            st+=1
        else:
            if(gems[en] in d.keys()):
                d[gems[en]]+=1
            else:
                d[gems[en]]=1
            en+=1
        if(len(d.keys())==len(s)):
            if(answer==None):
                answer = [st+1,en]
            elif(answer[1]-answer[0]>en-st-1):
                answer = [st+1,en]
            elif(answer[1]-answer[0]==en-st-1 and st+1<answer[0]):
                answer=[st+1,en]
    return answer