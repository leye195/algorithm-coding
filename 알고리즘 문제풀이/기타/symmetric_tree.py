def solution(root):
    return isMirror(root,root)
def isMirror(p,q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    return (p.val==q.val) and isMirror(p.left,q.right) and isMirror(p.right,q.left)

def solution1(root):
    if root:
        p,q=root.left,root.right
        if not p and not q:
            return True
        if not p or not q:
            return False
        if p.val!=q.val:
            return False
        return compare(p,q)
    else:
        return True
def compare(p,q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    if p.val!=q.val:
        return False
    if not compare(p.left,q.right)
        return False
    if not compare(p.right,q.left)
        return False
    return True