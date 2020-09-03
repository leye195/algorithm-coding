import sys
n = int(sys.stdin.readline())
houses = sorted(list(map(int,sys.stdin.readline().split(" "))))
print(houses[(n-1)//2])