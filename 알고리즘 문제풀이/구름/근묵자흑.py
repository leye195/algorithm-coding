# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
user_input = input()
list_input = [int(i) for i in input().split(" ")]
n,k = int(user_input.split(" ")[0]),int(user_input.split(" ")[1])

def solution(arr):
	cnt,idx = 0 , 0
	while(True):
		if(idx>=n): 
			break
		if(idx==0):
			idx+=k
		else:
			idx+=k-1
		cnt+=1
	return cnt
#list_input = sorted(list_input) 정렬 불필요
print(solution(list_input))