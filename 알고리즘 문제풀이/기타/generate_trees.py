# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
def solution(n):
    if n==0:
        return []
    else:
        getAns(1,n)
    
def getAns(st,en):
    res=[]
    if st>en:
        res.append(None)
        return res
    elif st==en:
        return [TreeNode(st)]
    else:
        for i in range(st,en+1):
        le=getAns(st,i-1)
        ri=getAns(i+1,en)
        for l in le:
            for r in ri:
                newNode=TreeNode(i)
                newNode.left=le
                newNode.right=ri
                res.append(newNode)
    return res
