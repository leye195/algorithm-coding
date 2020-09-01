
n,k = map(int,input().split())
a = list(map(int,input().split()))
b = list(map(int,input().split()))
a,b = sorted(a),sorted(b,reverse=True)
for i in range(0,k):
    if a[i]<b[i]:
        a[i],b[i] = b[i],a[i]
    else:
        break
print(sum(a))




