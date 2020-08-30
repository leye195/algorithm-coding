from itertools import permutations
def solution(n,m):
    answer,init_list = [],list(permutations([i+1 for i in range(int(n))],int(m)))
    for arr in init_list:
        tmp = sorted(arr)
        if tmp not in answer:
            answer.append(tmp)
    for item in answer:
        print(" ".join(map(str,item)))
n,m = map(int,input().split(" "))      
solution(n,m)