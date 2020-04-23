def solution(root):
    if not root:
        return None
    solution(root.right)
    solution(root.left)
    root.left=None
    root.right=prev
    prev=root

def solution1(root):
    last_node=None
    dfs(root,last_node)

def dfs(root,last_node):
    if not root:
        return
    if last_node:
        last_node.left=None
        last_node.right=root
    last_node=root
    t_right=root.right
    dfs(root.right,last_node)
    dfs(t_right,last_node)