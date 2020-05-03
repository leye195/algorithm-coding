def solution1(root):
    if not root:
        return 0
    q=from collections import deque
    q=deque()
    q.append([root,1])
    while q:
        node,level=q.popleft()
        if node.left:
            q.append([node.left,level+1])
        if node.right:
            q.append([node.right,level+1])
        elif not node.left:
            return level

def solution2(root):
    if not root:
        return 0
    elif not root.left and not root.right:
        return 1
    elif root.left and not root.right:
        return solution2(root.left)+1
    elif root.right and not root.left:
        return solution2(root.right)+1
    else:
        return min(solution2(root.left),solution2(root.right))+1