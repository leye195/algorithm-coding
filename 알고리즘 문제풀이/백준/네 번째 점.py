def solution(points):
    tx,ty,xs,ys=0,0,{},{}
    for point in points:
        x,y = point
        if x not in xs:
            xs[x]=1
        else:
            xs[x]+=1
        if y not in ys:
            ys[y]=1
        else:
            ys[y]+=1
    for x in xs.keys():
        if xs[x]<2:
            tx=x
            break
    for y in ys.keys():
        if ys[y]<2:
            ty=y
            break
    print(" ".join([str(tx),str(ty)]))

points=[]
for i in range(0,3):
    x,y = [int(i) for i in input().split(" ")]
    points.append([x,y])
solution(points)