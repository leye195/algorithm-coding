# 백트랙 이용 n개 중에서 m개를 뽑아 비교 불량 아이디와 비교 진행

def check_user(user,banned):
    if len(user)==len(banned):
        for i in range(0,len(user)):
            if  banned[i]!="*" and user[i]!=banned[i]:
                return False
            elif banned[i]=="*" or user[i]==banned[i]:
                continue
        return True
    else:
        return False
def backtrack(answer,user_id,banned_id,visited,tmp,idx):
    if len(tmp)==len(banned_id):
        sorted_tmp = sorted(tmp)
        if sorted_tmp not in answer:
            answer.append([i for i in sorted_tmp])
        return 
    for i in range(0,len(user_id)):
        if(visited[i]==0 and check_user(user_id[i],banned_id[len(tmp)])):
            visited[i]=1
            tmp.append(user_id[i])
            backtrack(answer,user_id,banned_id,visited,tmp,i)
            tmp.pop()
            visited[i]=0
    return
def solution(user_id, banned_id):
    answer,visited = [],[0 for i in range(0,len(user_id))]
    for i in range(len(user_id)):
        if visited[i]==0 and check_user(user_id[i],banned_id[0]):
            visited[i]=1
            backtrack(answer,user_id,banned_id,visited,[user_id[i]],i)
            visited[i]=0
    return len(answer)