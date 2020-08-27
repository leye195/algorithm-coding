'''
정확성 통과, 효율성 통과 못한 코드
def solution(words, queries):
    answer = []
    for q in queries:
        prefix,suffix,c = "","",0
        if(q[0]=="?" and q[-1]=="?"):
            prefix,suffix = "",""
        elif(q[0]=="?"):
            suffix = "".join(q.split("?"))
        elif(q[-1]=="?"):
            prefix = "".join(q.split("?"))
        #print(prefix,suffix)
        for word in words:
            if(len(word)==len(q)):
                if(len(prefix)==0 and len(suffix)==0):
                    c+=1
                elif(len(prefix)>0 and word[0:len(prefix)]==prefix):
                    c+=1
                elif(len(suffix)>0 and word[len(word)-len(suffix)::]==suffix):
                    c+=1
        answer.append(c)
    return answer
'''

'''
수정중인 코드
def solution(words,queries):
    class Trie:
        def __init__(self):
            self.head = {"remain":{}}
        def add(self,word):
            cur,remain = self.head,len(word)
            if(remain not in cur["remain"]):
                cur["remain"][remain]=1
            else:
                cur["remain"][remain]+=1
            for w in word:
                if w not in cur:
                    cur[w] = {"remain":{}}
                cur = cur[w]
                remain-=1
                if(remain not in cur["remain"]):
                    cur["remain"][remain]=1
                else:
                    cur["remain"][remain]+=1
        
        def search(self,word,check):
            cur = self.head
            if(len(word)+len(check) not in cur["remain"]):
                return 0
            for w in word:
                if w not in cur:
                    return 0
                else:
                    cur = cur[w]
            if check in cur["remain"]:
                return cur["remain"][check]
            else:
                return 0
    answer = []
    prefix,suffix = Trie(),Trie()

    for word in words:
        prefix.add(word)
        suffix.add(word[::-1])
    for q in queries:
        if(q.startswith("?")):
            s = q.replace("?","")[::-1]
            check = len(q)-len(s)
            answer.append(suffix.search(s,check))
        else:
            p = q.replace("?","")
            check = len(q)-len(p)
            answer.append(prefix.search(p,check))
    return answer
'''
#통과 코드
def solution(words,queries):
    answer = []
    class Node:
        def __init__(self,key):
            self.key = key #문자
            self.remain_length = {} #뒤에 남아있는 길이 갯수 체크
            self.childeren = {} #자식
    class Tries:
        def __init__(self):
            self.head = Node(None)
        
        def insert(self,word):
            curr_node = self.head #현재 노드
            remain_length = len(word) #처음 전체 남은 길이 
            if remain_length in curr_node.remain_length:
                curr_node.remain_length[remain_length]+=1
            else:
                curr_node.remain_length[remain_length]=1
            for w in word:
                if w not in curr_node.childeren:
                    curr_node.childeren[w] = Node(w)
                curr_node = curr_node.childeren[w]
                remain_length -=1 #문자 하나 넣었으니, 남은 길이 감소
                if remain_length in curr_node.remain_length:
                    curr_node.remain_length[remain_length]+=1
                else:
                    curr_node.remain_length[remain_length]=1

        def search_count(self,word,check_length):
            curr_node = self.head
            if check_length + len(word) not in curr_node.remain_length:
                return 0
            for w in word:
                if w in curr_node.childeren:
                    curr_node = curr_node.childeren[w]
                else:
                    return 0
            if check_length in curr_node.remain_length:
                return curr_node.remain_length[check_length]
            else:
                return 0

    prefix,suffix = Tries(),Tries()
    for w in words:
        prefix.insert(w)
        suffix.insert(w[::-1])

    for q in queries:
        if q.startswith("?"):
            tmp = q.replace("?","")[::-1]
            check_length = len(q) - len(tmp)
            answer.append(suffix.search_count(tmp,check_length))
        else:
            tmp = q.replace("?","")
            check_length = len(q) - len(tmp)
            answer.append(prefix.search_count(tmp,check_length))
    return answer

solution(["frodo", "front", "frost", "frozen", "frame", "kakao"],["fro??", "????o", "fr???", "fro???", "pro?"])