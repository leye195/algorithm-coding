INF=10000000
def solution(b,m,n,x,st,en):
    q=[[st,en]]
    p=[["" for i in range(n) for j in range(m)]]
    cnt=0
    while cnt<x:
        if cnt>=x:
            for i in range(len(b)):
                for j in range(len(b[i])):
                    if b[i][j]==INF:
                        if i>0:
                            b[i-1][j]=INF
                        if j>0:
                            b[i][j-1]=INF
                        if i<m-1:
                            b[i+1][j]=INF
                        if j<n-1:
                            b[i][j+1]=INF
            cnt=0
        tmp=q.pop(0)
        if b[tmp[0]][tmp[1]]==-1:
            break
        for i in range(0,4):
            if tmp[0]+1<m and b[tmp[0]+1][tmp[1]]!=INF:
                b[tmp[0]+1][tmp[1]]=b[tmp[0]][tmp[1]]+1
                p[tmp[0]+1][tmp[1]]="D"
                q.append([tmp[0]+1,tmp[1]])
            elif tmp[1]+1<n and b[tmp[0]][tmp[1]+1]!=INF:
                b[tmp[0]][tmp[1]+1]=b[tmp[0]][tmp[1]]+1
                p[tmp[0]][tmp[1]+1]="R"
                q.append([tmp[0],tmp[1]+1])
            elif tmp[0]-1>=0 and b[tmp[0]-1][tmp[1]]!=INF:
                b[tmp[0]-1][tmp[1]]=b[tmp[0]][tmp[1]]+1
                p[tmp[0]-1][tmp[1]]="U"
                q.append([tmp[0]-1,tmp[1]])
            elif tmp[1]-1>=0 and b[tmp[0]][tmp[1]-1]!=INF:
                b[tmp[0]][tmp[1]-1]=b[tmp[0]][tmp[1]]+1
                p[tmp[0]][tmp[1]-1]="L"
                q.append([tmp[0],tmp[1]-1])

        cnt+=1