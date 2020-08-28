def solution(user, banned):
    answer,visited = [],[0 for i in range(0,len(user))]
    def checkUser(user,banned_id):
        if(len(user)==len(banned_id)):
            for i in range(0,len(user)):
                if(banned_id[i]!="*" and user[i]!=banned_id[i]):
                    return False
                elif(banned_id[i]=="*" or user[i]==banned_id[i]):
                    continue
            return True
        return False
    def backtrack(answer,user,banner,visited,arr,idx):
        if(len(arr)==len(banned)):
            sorted_arr = sorted(arr)
            if sorted_arr not in answer:
                answer.append([i for i in sorted_arr])
            return
        for i in range(0,len(user)):
            if(visited[i]==0 and checkUser(user[i],banned[len(arr)])):
                visited[i]=1
                arr.append(user[i])
                backtrack(answer,user,banner,visited,arr,i)
                arr.pop()
                visited[i]=0
        return 
    for i in range(0,len(user)):
        if(visited[i]==0 and checkUser(user[i],banned[0])):
            visited[i]=1
            backtrack(answer,user,banned,visited,[user[i]],i)
            visited[i]=0
    return len(answer)

solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])
solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])
solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "*rodo", "******", "******"]	)


