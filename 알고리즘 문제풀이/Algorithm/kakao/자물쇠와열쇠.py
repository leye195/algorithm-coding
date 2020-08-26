import sys
sys.setrecursionlimit(10**6)
def check(key,lock,x,y,sx,ex,sy,ey):
    tmp=[[lock[i][j] for i in range(len(lock))] for j in range(len(lock))]
    r,c=0,0
    for i in range(x,x+len(key)):
        for j in range(y,y+len(key)):
            if(i>=sx and i<=ex and j>=sy and j<=ey):
                if tmp[i][j]==0 and key[r][c]==1:
                    tmp[i][j]=1
                elif tmp[i][j]==1 and key[r][c]==1:
                    return False
            c+=1
            if(c==len(key)):
                c=0
                r+=1
            
    for i in range(sx,ex):
        for j in range(sy,ey):
            if tmp[i][j]==0:
                return False
    return True
def rotateArr(arr):
    for i in range(len(arr)):
        for j in range(len(arr)):
            arr[j][len(arr)-i-1]=arr[i][j]
    return arr
def solution(key, lock):
    #3배 확장
    extended_lock=[[0 for i in range(len(lock)*3)] for j in range(len(lock)*3)]
    #중앙배치
    for i in range(len(lock)):
        for j in range(len(lock)):
            extended_lock[i+len(lock)][j+len(lock)]=lock[i][j]
    s_x=s_y=len(lock)
    e_x=e_y=2*len(lock)
    for d in range(0,4):
        key=rotateArr(key)#90도 전환
        for i in range(0,len(extended_lock)-len(key)+1):
            for j in range(0,len(extended_lock)-len(key)+1):
                if(key,extended_lock,i,j,s_x,e_x,s_y,e_y):
                    return True
    return False