def solution(blocks):
    answer,idx,cnt = [],0,1
    INF = int(1e9)
    p = [[]*5 for i in range(5)]
    for i in range(5):
        for j in range(0,i+1):
            p[i].append(INF)
    for i in range(len(blocks)):
        p[i][blocks[i][0]] = blocks[i][1]
    for i in range(len(blocks)-1):
        for j in range(len(p[i])):
            if p[i][j]!=INF:
                if p[i+1][j]!=INF and p[i+1][j+1]==INF:
                    p[i+1][j+1]=p[i][j]-p[i+1][j]
                elif p[i+1][j]==INF and p[i+1][j+1]!=INF:
                    p[i+1][j]=p[i][j]-p[i+1][j+1]
        for j in range(len(p[i])-1,-1,-1):
            if p[i][j]!=INF:
                if p[i+1][j]!=INF and p[i+1][j+1]==INF:
                    p[i+1][j+1]=p[i][j]-p[i+1][j]
                elif p[i+1][j]==INF and p[i+1][j+1]!=INF:
                    p[i+1][j]=p[i][j]-p[i+1][j+1]
    for i in range(len(blocks)):

        for j in p[i]:
            answer.append(j)
    return answer

