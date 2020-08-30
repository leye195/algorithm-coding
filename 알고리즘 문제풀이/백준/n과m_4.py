from itertools import combinations_with_replacement

def solution(n,m):
    item_list = list(combinations_with_replacement([i for i in range(1,n+1)],m))
    for item in item_list:
        print(" ".join(map(str,item)))
        
n,m = map(int,input().split(" "))
solution(n,m)