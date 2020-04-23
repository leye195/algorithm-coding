#모든 최단 경로를 구하는 방법
#음의 가중치를 가진 간선 사용가능
#모든 정점에 대한 경로를 계산해 거리를 저장할 2차원 배열 필요
#D테이블에는 모든 경로의 비용 저장
#다른 하나 P테이블에는 각 정점까지 가기 전의 정점을 저장
#ex)
#D[1,3],D[1,2]+D[2,3] => min(D[1,3],D[1,2]+D[2,3])
INF=10000000
def floydWarshall(d,p):
    for k in range(len(d)): #중간에 거쳐가는 정점
        for i in range(len(d)): # 출발 
            for j in range(len(d)): # 도착
                if(d[i][j]>d[i][k]+d[k][j]):
                    d[i][j]=d[i][k]+d[k][j]
                    p[i][j]=k
    print(d)
    print(p)

d=[
    [0,5,INF,8],
    [7,0,9,INF],
    [2,INF,0,4],
    [INF,INF,3,0]
]
p=[[None for i in range(0,4)] for j in range(0,4)]
for i in range(0,len(d)):
    for j in range(0,len(d)):
        if d[i][j]!=0 and d[i][j]!=INF:
            p[i][j]=i
floydWarshall(d,p)


