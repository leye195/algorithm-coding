def spiralOrder(matrix):
    if(len(matrix)==0):
        return []
    arr=[]
    x,y,cur=0,0,0
    c,r=len(matrix),len(matrix[0])
    while(cur<c*r):
        if matrix[x][y]!=0:
            arr.append(matrix[x][y])
            matrix[x][y]=0
            cur+=1
        if(f==0):
            if(y+1<len(matrix[0]) and matrix[x][y+1]!=None):
                y=y+1
            else:
                f=1
        if(f==1):
            if(x+1<len(matrix) and matrix[x+1][y]!=None):
                x=x+1
            else:
                f=2
        if(f==2):
            if(y-1>=0 and matrix[x][y-1]!=None):
                y=y-1
            else:
                f=3
        if(f==3):
            if(x-1>=0 and matrix[x-1][y]!=None):
                x=x-1
            else:
                f=0
    return arr
spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])