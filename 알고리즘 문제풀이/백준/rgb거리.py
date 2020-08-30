n = int(input())
color=[[0,0,0] for i in range(0,n)]
house = []
for i in range(0,n):
    r,g,b = map(int,input().split(" "))
    house.append([r,g,b])
color[0][0]+=house[0][0]
color[0][1]+=house[0][1]
color[0][2]+=house[0][2]

for i in range(1,n):
    color[i][0]=min(color[i-1][1],color[i-1][2])+house[i][0]
    color[i][1]=min(color[i-1][0],color[i-1][2])+house[i][1]
    color[i][2]=min(color[i-1][0],color[i-1][1])+house[i][2]
print(min(color[n-1]))