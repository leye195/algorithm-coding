from itertools import product
def solution(n,m):
    item_list = list(product("".join(list(map(str,[i for i in range(1,n+1)]))),repeat=m))
    for item in item_list:
        print(" ".join(item))
    
n,m = map(int,input().split(" "))
solution(n,m)

