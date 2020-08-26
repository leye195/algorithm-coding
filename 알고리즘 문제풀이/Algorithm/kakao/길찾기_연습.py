#이진트리의 노드가 되도록 구성한 후, 
#순회 방법을 힌트로 주어 각 팀이 스스로 경로를 찾도록 할 계획
import heapq
import sys
sys.setrecursionlimit(10**6) #Python 재귀 제한 설정
class Node:
    def __init__(self,data):
        self.data=data
        self.left=None
        self.right=None
class BinaryTree:
    def __init__(self):
        self.root=None
        self.pr=[]
        self.po=[]
    def insert(self,data):
        self.root=self.insert_value(self.root,data)
    def insert_value(self,node,data):
        if node is None:
            node=Node(data)
        else:
            if data[0][0]<node.data[0][0] and data[0][1]<node.data[0][1]:
                node.left=self.insert_value(node.left,data)
            elif data[0][0]>node.data[0][0] and data[0][1]<node.data[0][1]: 
                node.right=self.insert_value(node.right,data)
        return node
    def pre_ord(self,node):
        if node:
            self.pr.append(node.data[1])
            self.pre_ord(node.left)
            self.pre_ord(node.right)
        return
    def post_ord(self,node):
        if node:
            self.post_ord(node.left)
            self.post_ord(node.right)
            self.po.append(node.data[1])
        return
def solution(nodeinfo):
    h=[]
    for i in range(len(nodeinfo)):
        #우선순위 큐(max-heap)이용, y 좌표 높을 수록 우선순위 높음
        heapq.heappush(h,(-nodeinfo[i][1],[nodeinfo[i],i+1]))
    b=BinaryTree()#이분트리 생성
    while h:
        tmp=heapq.heappop(h)[1]
        b.insert(tmp)
    b.pre_ord(b.root)
    b.post_ord(b.root)
    return [b.pr,b.po]