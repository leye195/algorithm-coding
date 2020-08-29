def bfs(graph,visited,v):
    s,q=[],[v]
    visited[v] = 1
    while(len(q)>0):
        t = q.pop(0)
        s.append(str(t))
        if t not in graph: # 지점에 아무것도 연결되어 있지 안을시
            sorted_graph=[]
        else:
            sorted_graph = sorted(graph[t])
        for i in sorted_graph:
            if visited[i]==0:
                q.append(i)
                visited[i]=1
    return " ".join(s)

def dfs(graph,visited,v):
    s,st=[str(v)],[v]
    visited[v] = 1
    while(len(st)>0):
        t = st.pop()
        if(visited[t]==0):
            visited[t]=1
            s.append(str(t))
        if t not in graph: # 지점에 아무것도 연결되어 있지 안을시
            sorted_graph=[]
        else:
            sorted_graph = sorted(graph[t])
        for i in range(len(sorted_graph)-1,-1,-1):
            if visited[sorted_graph[i]]==0:
                st.append(sorted_graph[i])

    return " ".join(s)


def solution(n,m,v):
    graph={}
    for i in range(0,m):
        x,y = [int(i) for i in input().split(" ")]
        if(x not in graph):
            graph[x] = [y]
        else:
            graph[x].append(y)
        if(y not in graph):
            graph[y] = [x]
        else:
            graph[y].append(x)
    visited = [0 for i in range(n+1)]
    print(dfs(graph,visited,v))
    visited = [0 for i in range(n+1)]
    print(bfs(graph,visited,v))

n,m,v = [int(i) for i in input().split(" ")]
solution(n,m,v)
    