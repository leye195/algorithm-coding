def solution1(root,sum):
    if not root:
        return False
    if not root.left and not root.right:
        if root.val==sum:
            return True
    return solution1(root.left,sum-root.val) or solution1(root.right,sum-root.val)

def solution2(root,sum):
    if not root:
        return False
    from collections import deque:
    q=deque()
    q.append([root,root.val])
    while q:
        node,val=q.popleft()
        if not node.left and not node.right:
            if val==sum:
                return True
        if node.left:
            q.append([root.left,val+root.left.val])
        if node.right:
            q.append([root.right,val+root.right.val])
    return False