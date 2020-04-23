def solution(root):
    if not root:
        return []
    from collections import deque
    q=deque()
    res=[]
    q.append((root,1))
    while q:
        node,level=q.popleft()
        if len(res)<level:
            res.append([node.val])
        else:
            res[level-1].append(node.val)
        if node.left:
            q.append((node.left,level+1))
        if node.right:
            q.append((node.right,level+1))
    return res[::-1]