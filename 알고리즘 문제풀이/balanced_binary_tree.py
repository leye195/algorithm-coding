def solution(root):
    return getHeight(root)
def getHeight(root):
    if not root:
        return 0
    le=getHeight(root.left)
    if le==-1:
        return -1
    ri=getHeight(root.right)
    if ri==-1:
        return -1
    return max(le,ri)+1