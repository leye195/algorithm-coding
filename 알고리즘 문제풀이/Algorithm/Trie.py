"""
트라이(Trie)
주로 스트링을 가지고 동적 셋 혹은 연관 배열을 저장하는데
사용되는 정렬된 트리 자료구조를 의미함.
트라이 상의 트리들은 노드롸 연관된 키를 저장하지 않고
트리상에서 위치가 현재의 키를 나타냄
(문자열을 저장하고 효율적으로 탐색가능)

특정 노드의 모든 후손들은 그 노드에서와 동일한 prefix를
가지면, root는 빈 문자열을 갖는다.
값은 말단 노드 혹은 특정 키에 해당되는 내부노드에게만 
존재한다.

[Trie는 많은양의 텍스트 정보를 빠르고 효율적으로 검색하기 위해
그래서 Trie는 사전 혹은 인터넷 자동완성의 retrieval을 효과적으로 할 수 있는 자료구조]
이진트리와 달리 많은 자식들을 가지고 있을수 있음    

트라이는 생성해두면 원하는 단어를 찾을때 O(m)의 시간만에 찾을수 있음
(m: 문자열 길이)



트라이가 문자를 찾기 좋은 자료구조이지만, 치명적인 단점이 존재한다
단점: 공간 복잡도,트라이가 O(m)의 시간이 나오기 위해서는 다음 문자를 가리키는 노드가 필요
ex)
숫자에 대해서 트라이를 형성시 0~9인 10개 포인터 배열을 가져야됨
알파벳 경우 a-z인 총 26개의 포인터 배열을 가지고 있어야된다
즉, 최종 메모리는 O(포인터크기*포인터배열 개수*트라이에 있는 총 노드개수)

생성시 시간복잡도: O(M*L), M개 문자열에 대해 트라이 구조에 넣는건 가장 긴 문자열 길이 L 만큼 걸려서 
탐색시 시간복잡도: O(L), 가장 긴 문자열 길이 만큼 탐색하기 때문

구현:
"""
class Node(object):
    def __init__(self,key,data=None):
        self.key=key #단어의 글자 하나를 가르킴
        self.children={} 
        self.data=data #마지막 글자를 나타내는 flag,True/False

#insert(string) : 트라이에 문자열 삽입
#search(string) : 주어진 단어 트라이에 존재 확인
#starts_with(prefix) :prefix로 시작하는 단어 bfs로 트라이에서 찾아서 리스트로 반환

class Tries:
    def __init__(self):
        self.head=Node(None)
    
    def insert(self,st):
        cur_node=self.head
        for c in st:
            if c not in cur_node.children:
                cur_node.children[c]=Node(c)
            cur_node=cur_node.children[c]
        #string의 마지막 글자일 경우 node의 data에 문자열을 저장
        cur_node.data=st
    
    def search(self,st):
        cur_node=self.head
        for c in st:
            if c in cur_node.children:
                cur_node=cur_node.children[c]
            else:
                return False
        if(cur_node.data!=None):
            return True
    
    """
    주어진 prefix로 시작하는 단어들을 
    트라이에서 찾아 리스트로 반환
    """
    def starts_with(self,prefix):
        cur_node=self.head
        result=[]
        sub=None

        for c in prefix:
            if c in cur_node.children:
                cur_node=cur_node.children[c]
                sub=cur_node
            else:
                return None
        q=list(sub.children.values())
        while q:
            cur=q.pop(0)
            if cur.data!=None:
                result.append(cur.data)
            q+=list(cur.children.values())
        return result
        
"""

"""