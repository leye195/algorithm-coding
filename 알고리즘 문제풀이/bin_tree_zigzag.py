def solution(root):
    if not root:
        return []
    res,q=[],[]
    z=0
    q.append(root)
    res.append([root.val])
    while q:
        tmp=[]
        t_len=len(q)
        for i in range(t_len):
            if z==0:
                t=q.pop(0)
                if t.right:
                    tmp.append(t.right.val)
                    q.append(t.right)
                if t.left:
                    tmp.append(t.left.val)
                    q.append(t.left)
            elif z==1:
                t=q.pop()
                if t.left:
                    tmp.append(t.left.val)
                    q.insert(0,t.left)
                if t.right:
                    tmp.append(t.right.val)
                    q.insert(0,t.right)
        if len(tmp)>0:
            res.append(tmp)
            z^=1
    return res 

def solution2(root):
    if not root:
        return []
    from collections import deque
    q=deque()
    q.append((root,1))
    res=[]
    while q:
        node,level=q.popleft()
        if len(res)<level:
            res.append([node.val])
        else:
            if level%2==1:
                res[level-1].append(node.val)
            else:
                res[level-1].insert(0,node.val)
        if node.left:
            q.append((node.left,level+1))
        if node.right:
            q.append((node.right,level+1))
    return res