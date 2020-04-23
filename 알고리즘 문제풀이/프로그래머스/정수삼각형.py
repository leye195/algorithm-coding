
"""
DFS 경로 탐색을 이용해 최댓값을 구하려고 했으나  
2중 loop에다가 안에 while문으로 인한 시간 복잡도 허헣
O(n^2)?
실패 코드
"""
def solution1(triangle):
    answer = 0
    x,y=len(triangle)-1,len(triangle[len(triangle)-1])-1
    for i in range(len(triangle)):
        for j in range(len(triangle[i])):
            q=[[i,j,triangle[i][j]]]
            while q:
                tmp=q.pop()
                if tmp[0]==x and tmp[1]==y:
                    answer=max(answer,tmp[2])
                if tmp[0]+1<=x and tmp[1]+1<=len(triangle[tmp[0]+1])-1:
                    q.append([tmp[0]+1,tmp[1]+1,tmp[2]+triangle[tmp[0]+1][tmp[1]+1]])
                if tmp[1]+1<=len(triangle[tmp[0]])-1:
                    q.append([tmp[0],tmp[1]+1,tmp[2]+triangle[tmp[0]][tmp[1]+1]])
    return answer
"""
개선 됬지만 실패, 트리의 깊이 범위가 1~500이며 중복 계산으로 시간 낭비 됨
실패 코드 역시 dfs응용
"""
def solution2(triangle):
    x,y=len(triangle),len(triangle[len(triangle)-1])
    d=[[0 for i in range(y)]for j in range(x)]
    d[0][0]=triangle[0][0]
    st=[[0,0]]
    while st:
        tmp=st.pop()
        if tmp[0]+1<=x-1:
            if d[tmp[0]+1][tmp[1]]==0:
                d[tmp[0]+1][tmp[1]]=triangle[tmp[0]+1][[tmp[1]]]+d[tmp[0]][tmp[1]]           
            else:
                d[tmp[0]+1][tmp[1]]=max(d[tmp[0]+1][tmp[1]],triangle[tmp[0]+1][tmp[1]]+d[tmp[0]][tmp[1]])
            st.append([tmp[0]+1,tmp[1]])
        if tmp[0]+1<=x-1 and tmp[1]+1<=y-1:
            if d[tmp[0]+1][tmp[1]+1]==0:
                d[tmp[0]+1][tmp[1]+1]=triangle[tmp[0]+1][[tmp[1]+1]]+d[tmp[0]][tmp[1]]
            else:
                d[tmp[0]+1][tmp[1]+1]=max(d[tmp[0]+1][tmp[1]+1],triangle[tmp[0]+1][tmp[1]+1]+d[tmp[0]][tmp[1]])
            st.append([tmp[0]+1,tmp[1]+1])
    return max(d[x-1])
"""
문제에서 언급한 [꼭대기에서 바닥까지 이어진 경로]를 잘 생각해보니
대각선 방향으로 움직일 필요 없이 그냥 바닥에만 도착하면 되는것을...
그렇다면 문제 푸는 방법은 아래와 같아진다.
꼭대기 부터 아래 까지 모두 본인이 가지고 있을수 있는 최댓값을 가지있고 
맨 마지막 라인에 있는 최댓값들 중 제일 큰 값을 답으로 가져오면 된다.
즉, 아래와 같은 삼각형이 있다면
[7]             [7]
[3 8]    =>     [10 15]
[8 1 0]         [11 16 15]   
max([11,16,15])를 구하면 된다.
"""
def solution3(triangle):
    x,y=len(triangle),len(triangle[len(triangle)-1])
    d=[[0 for i in range(y)]for j in range(x)]
    d[0][0]=triangle[0][0] #꼭지점의 최대값은 꼭지점 자신의 값을 가짐
    for i in range(1,x):
        for j in range(len(triangle[i])):
            if i-1>=0 and j-1>=0:
                d[i][j]=max(d[i][j],d[i-1][j-1]+triangle[i][j])
            if i-1>=0:
                d[i][j]=max(d[i][j],d[i-1][j]+triangle[i][j])
    return max(d[x-1])