#항상 ICN 공항에서 출발합니다.
#항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 
#방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성
#tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미
#주어진 항공권은 모두 사용해야 합니다.
#만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
#모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
answer=[]
def dfs(s,tickets,visited,cnt,tmp):
    tmp.append(s)
    if cnt==len(tickets): # 모든 티켓 사용 끝
        answer=[t for t in tmp]
        return [True,answer]
    for i in range(len(tickets)):
        if tickets[i][0]==s and visited[i]==0:
            visited[i]=1
            flag=dfs(tickets[i][1],tickets,visited,cnt+1,tmp)
            if flag[0]:#사용 완료한 경우 dfs끝 
                return flag
            visited[i]=0
    tmp.pop()
    return [False,tmp]
def solution(tickets):
    tmp = []
    visited=[0 for i in range(0,len(tickets))]
    tickets=sorted(tickets)
    return dfs("ICN",tickets,visited,0,tmp)[1]