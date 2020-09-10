def find(p,x):
    if p[x]==x:
        return x
    p[x] = find(p,p[x])
    return p[x]

def union(p,x,y):
    x,y = find(p,x),find(p,y)
    if x<y: p[y]=x
    else: p[x]=y


#check cycle
def check_cycle():
    v,e = map(int,input().split())
    p=[0]*v
    for i in range(v):
        p[i]=i
    for i in range(e):
        a,b = map(int,input().split())
        if find(p,a)==find(p,b):
            return False
        else:
            union(p,a,b)
    return True

