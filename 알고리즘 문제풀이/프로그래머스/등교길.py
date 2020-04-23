"""
시작점(1,1)->도착점(m,n)
paddles=[[]] ->물이 잠긴 좌표들
최단 경로개수에 1000000007을 나눈 나머지 값 출력
"""
def solution(m,n,paddles):
    d=[[0 for i in range(n+1) for j in range(m+1)]]
    for p in paddles:
        d[p[0]][p[1]]=-1
    d[1][1]=1
    for i in range(1,m+1):
        for j in range(1,n+1):
            if i==1 and j==1:
                continue
            if d[i][j]==-1:
                d[i][j]=0
                continue
            d[i][j]=(d[i-1][j]+d[i][j-1])%1000000007
    return d[n][m]
        