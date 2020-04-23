class Solution:
    def countAndSay(self,n:int):
        s='1'
        for i in range(2,n+1):
            s=self.getNextLevel(s)
        return s
    def getNextLevel(self,s):
        tmp=[]
        start,end=0,1
        while(end<len(s)):
            if s[end]==s[start]:
                end+=1
            else:
                tmp.append(end-start)
                tmp.append(s[start])
                start=end
                end+=1
        tmp.append(end-start)
        tmp.append(s[start])
        return ''.join([str(t) for t in tmp])