
total=0
def place_queen(answer,visited,x,y,cnt,n):
    if cnt==n:
        global total
        total+=1
        return
    for i in range(0,n):
        if(check_queen(visited,x+1,i,n)):
            visited[x+1][i]=1
            place_queen(answer,visited,x+1,i,cnt+1,n)
            visited[x+1][i]=0
    #print(num)
    return 

def check_queen(visited,x,y,n):
    #먼저 x,y 위치에 배치할수 있는지 체크
    for i in range(0,n):
        if(visited[i][y]!=0):
            return False
    for i in range(0,n):
        if(0<=x-i<n and 0<=y-i<n and visited[x-i][y-i]!=0):
            return False
    for i in range(0,n):
        if(0<=x-i<n and 0<=y+i<n and visited[x-i][y+i]!=0):
            return False
    return True
            
def solution(n):
    answer = []
    visited=[[0 for j in range(n)]for i in range(n)]
    for i in range(0,n):
        visited[0][i]=1
        place_queen(answer,visited,0,i,1,n)
        visited[0][i]=0
    print(total)
n = int(input())
solution(n)

'''
n = int(input())
answer = [0,1,0,0,2,10,4,40,92,352,724,2680,14200,73712,365596,2279184]
print(answer[n])
'''