def solution(root,sum):
    if not root:
        return []
    res=[]
    getAns(root,[root.val],res,sum-root.val)
    return res
def getAns(root,cur,res,s):
    if s==0 and not root.left and not root.right:
        res.append(cur)
    if node.left:
        getAns(root.left,cur+[node.left.val],res,s-node.left.val)
    if node.right:
        getAns(root.right,cur+[node.right.val],res,s-node.right.val)