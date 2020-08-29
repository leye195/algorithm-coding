from itertools import permutations
def backtrack(answer,visited,arr,m):
    if len(arr)==m:
        if arr not in answer:
            answer.append([i for i in arr])
        return
    for i in range(1,len(visited)):
        if visited[i]==0:
            visited[i]=1
            arr.append(i)
            backtrack(answer,visited,arr,m)
            arr.pop()
            visited[i]=0
    return
def solution(n,m):
    answer = list(permutations([i for i in range(1,n+1)],m))
    for item in answer:
        print(" ".join(map(str,item)))

n,m = map(int,input().split(" "))#[int(i) for i in input().split(" ")]
solution(n,m)
