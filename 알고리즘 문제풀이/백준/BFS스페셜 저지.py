n = int(input())
graph,level={},[-1 for i in range(100001)]
for i in range(n-1):
    x,y = input().split(" ")
    if int(x)-1 not in graph:
        graph[int(x)-1]=[int(y)-1]
    else:
        graph[int(x)-1].append(int(y)-1)
    if int(y)-1 not in graph:
        graph[int(y)-1]=[int(x)-1] 
    else:
        graph[int(y)-1].append(int(x)-1)
visit = input().split(" ")
visit=[int(i)-1 for i in visit]
if(visit[0]!=0):
    print(0)
else:
    q,visited,flag=[0],[0 for i in range(n)],True
    level[0],cnt=0,0
    visited[0] = 1
    while(len(q)>0):
        tmp = q.pop(0)
        for i in graph[tmp]:
            if visited[i]==0:
                visited[i]=1
                q.append(i)
                level[i]=cnt+1
        cnt+=1
    for i in range(1,len(visit)):
        if(level[i-1]==-1 or level[i]==-1 or level[visit[i-1]]>level[visit[i]]):
            flag=False
            print(0)
            break
    if(flag):
        print(1)
