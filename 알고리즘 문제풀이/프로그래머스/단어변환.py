def bfs(begin,target,words,visited):
    q=[[begin,0]]
    while q:
        tmp=q.pop(0)
        if tmp[0]==target:
            return tmp[1]
        for i in range(len(words)):
            diff=0
            if visited[i]==0:
                for j in range(len(words[i])):
                    if tmp[0][j]!=words[i][j]:
                        diff+=1
                if diff==1:
                    q.append([words[i],tmp[1]+1]) #단어,변환된 횟수
    return 0
def solution(begin,target,words):
    visited=[0 for i in range(len(words))]
    return bfs(begin,target,words,visited)
