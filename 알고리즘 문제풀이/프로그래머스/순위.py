#플로이드 와샬 알고리즘 응용
INF=987654321
def solution(n,results):
    answer=0
    d=[[INF for i in range(n)] for j in range(n)]
    for i in range(n):
        d[i][i]=0 #i==i
    for r in results:
        d[r[0]-1][r[1]-1]=1 #A가 B를 무조건 이긴다는것 A->B
    for k in range(n):
        for i in range(n):
            for j in range(n):
                d[i][j]=min(d[i][j],d[i][k]+d[k][j])
    flag=[1 for i in range(n)] 
    for i in range(n):
        for j in range(n):
            if d[i][j]==INF and d[j][i]==INF: #둘 다 INF인 경우 비교 불가함으로 false를 넣어줌 
                flag[i]=0
    for f in flag:
        if f==1:
            answer+=1
    return answer