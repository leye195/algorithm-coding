# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import copy

def solution():
    n = int(input())
    board=[[0 for j in range(0,n)] for i in range(0,n)]
    visited=[[0 for j in range(0,n)] for i in range(0,n)]
    di,answer,walls = [[-1,0],[0,-1],[1,0],[0,1]],0,[]
    for i in range(0,n):
        v = input().split(" ")
        for j in range(0,n):
            board[i][j] = int(v[j])
    for i in range(0,int(n)):
        for j in range(0,int(n)):
            if(board[i]==0):
                
    #print(answer)
            
solution()
	
	