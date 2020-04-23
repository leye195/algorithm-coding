def solution(p,q):
   s1,s2=[],[]
   pre(p,s1)
   pre(q,s2)
   return s1==s2 

#dfs
def pre(root,tmp):
    if root:
        tmp.append(root.val)
        if root.left:
            pre(root.left,tmp)
        elif root.right is not None:
            tmp.append(None)
        if root.right:
            pre(root.right,tmp)
        elif root.left is not None:
            tmp.append(None)