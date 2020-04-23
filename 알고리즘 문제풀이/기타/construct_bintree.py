'''
[3,9,20,15,7]
[9,3,15,20,7]

9 0
3 1
15 2
20 3
7 4

cur=TreeNode(pre[0])
pivot=d[pre[0]]=d[3]=1
cur.left=build(p,o,d,pl+1,pl+(pivot-il),il,pivot-1)
cur.right=build(p,o,d,pl+(pivot-il)+1,pivot+1,ir)
'''

def solution(preorder,inorder):
    d={}
    for k,i in enumerate(inorder):
        d[i]=k
    return buildtree(preorder,inorder,d,0,len(preorder)-1,0,len(inorder)-1)
    
def buildtree(pre,inord,d,pl,pr,il,ir):
    if pl>pr:
        return None
    if pr-pl<1:
        return TreeNode(pre[pl])
    cur=TreeNode(pre[pl])
    pivot=d[pre[pl]]
    cur.left=buildtree(pre,inord,d,pl+1,pl+(pivot-il),il,pivot-1)
    cur.right=buildtree(pre,inord,d,pl+(pivot-il)+1,pr,pivot+1,ir)
    return cur

def in_post(inorder,postorder):
    pidx=[len(postorder)-1]
    return build(inorder,postorder,0,len(postorder)-1,pidx)

def build(inord,post,inst,inen,pidx):
    if inst>inen:
        return None
    node=TreeNode(post[pidx[0]])
    pidx[0]-=1
    if inst==inen:
        return node
    iidx=search(inord,inst,inen,node.val)
    node.left=build(inord,post,inst,iidx-1,pidx)
    node.right=build(inord,post,iidx+1,inen,pidx)
    return node