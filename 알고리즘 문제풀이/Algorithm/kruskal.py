import heapq 
'''
greedy 방법을 활용해 네트워크의 모든 정점을 최소 비용으로 
연결하는 최적의 답을 구하는 방법

동작 과정:
1.그래프의 간선들을 가중치의 오름차순으로 정렬
2.정렬된 간선 리스트에서 순서대로 사이클을 형성하지 않는 간선을 선택
- 선택된 간선들을 집합에 추가할 떄 사이클이 생성되는지 체크해줘야됨
즉, 추가할 새로운 간선의 양끝 정점이 같은 집합에 속해있으면 사이클 형성
- 사이클 생성 여부는 union-find 알고리즘을 활용

3.해당 간선을 현재의 MST의 집합에 추가

시간 복잡도:
union-find 활용시 복잡도는 간선들을 정렬하는 시간에 결정된다.
- 간선 e개를 효율적으로 정렬할시 O(elogE)
prim 알고리즘은 O(N^2)

-그래프 내에 적은 숫자의 간선만을 가지는 
‘희소 그래프(Sparse Graph)’의 경우 Kruskal 알고리즘이 적합하고

-그래프에 간선이 많이 존재하는 
‘밀집 그래프(Dense Graph)’ 의 경우는 Prim 알고리즘이 적합하다.
'''
def getParent(s,a):
    if s[a]==a:
        return a
    s[a]=getParent(s,s[a])
    return s[a]
def union(s,a,b):
    a,b = getParent(s,a),getParent(s,b)
    if a<b: s[b]=a
    else: s[a]=b
def find(s,a,b):
    a,b = getParent(s,a),getParent(s,b)
    if a==b: return 1
    return 0
def Kruskal(n,costs):
    answer,sortedCosts,cycle = 0,sorted([cost for cost in costs],key=lambda x: x[2]),[i for i in range(n)]
    for cost in sortedCosts:
        if(find(cycle,cost[0],cost[1])==0):
            union(cycle,cost[0],cost[1])
            answer+=cost[2]
    return answer


def solution(n,costs):
    answer,h,v=0,[],[i for i in range(n)]
    for cost in costs:
        heapq.heappush(h,(cost[2],(cost[0],cost[1])))
    while h:
        cost = heapq.heappop(h)
        if(find(v,cost[1][0],cost[1][1])==0):
            union(v,cost[1][0],cost[1][1])
            answer+=1
    return answer



    