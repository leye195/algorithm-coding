def solution(n,plan):
    mp={"L":[0,-1],"R":[0,1],"U":[-1,0],"D":[1,0]}
    cx,cy = 0,0
    for move in plan:
        tx,ty = cx+mp[move][0],cy+mp[move][1]
        if(0<=tx<n and 0<=ty<n):
            cx,cy = tx,ty
    print(cx+1,cy+1)

n = int(input())
plan = input().split(" ")
solution(n,plan)
#solution(5,"R R R U D D")

