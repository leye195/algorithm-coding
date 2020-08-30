n = int(input())

for i in range(n):
    answer=""
    r,s = input().split(" ")
    for ch in s:
        answer+=ch*int(r)
    print(answer)

