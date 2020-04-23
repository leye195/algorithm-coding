#LCS 최장 공통 부분 수열
#ex)
#A: CDABE
#B: CDEGT
#공통 부분 수열:
#{},{C},{CD}.{DE},{CE},{CDE}
#
#LCS 길이 구하기
#            - NUll if(i=0 or j=0)
#LCS(Xi,Yj)=|- LCS(Xi-1,Yj-1)+1 if(xi=yj)
#            - max(LCS(Xi-1,Yj),LCS(Xi,Yj-1)) if(xi!=yj)

def LCS(X,Y):
    d=[[0 for i in range(len(X)+1)] for j in range(len(Y)+1)]
    for i in range(1,len(X)+1):
        for j in range(1,len(Y)+1):
            if X[i-1]==Y[j-1]:
                d[i][j]=d[i-1][j-1]+1
            else:
                d[i][j]=max(d[i-1][j],d[i][j-1])
    print(d)
LCS("CDABE","CDEGT")
