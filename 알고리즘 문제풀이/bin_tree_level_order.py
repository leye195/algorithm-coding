def solution(root):
    res=[]
    q=[]
    if root:
        res.append([root.val])
        q.append(root)
        while(len(q)>0):
            tmp=[]
            q_len=len(q)
            for i in range(q_len):
                t=q.pop(0)
                if t.left:
                    tmp.append(t.left.val)
                if t.right:
                    tmp.append(t.right.val)
            if len(tmp)>0:
                res.append(tmp)
    return res