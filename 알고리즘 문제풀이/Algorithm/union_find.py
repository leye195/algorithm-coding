def find(p,x):
    if p[x]==x:
        return x
    p[x] = find(p,p[x])
    return p[x]

def union(p,x,y):
    x,y = find(p,x),find(p,y)
    if x<y: p[y]=x
    else: p[x]=y

