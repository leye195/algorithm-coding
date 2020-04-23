#Cache 알고리즘 중 가장 유명한 알고리즘 중 하나 
#Least Recently Used(LRU),캐시에서 메모리를 다루기 위해 사용
#메모리 상에서 가장 최근에 사용된 적이 없는 캐시 메모리부터 대체하며 새로운 
#데이터로 갱신해줌
from datetime import datetime
class LRUCacheItem(object):
    def __init__(self,key,item):
        self.key=key
        self.item=item
        self.timestemp=datetime.now()

class LRUCache(object):
    def __init__(self,length,delta=None):
        self.length=length
        self.delta=delta
        self.hash={}
        self.item_list=[]

    def insertItem(self,item):
        #새로운 item을 cache에 추가
        if item.key in self.hash:
            #cache에 item이 있는 경우, item을 갱신해준다
            idx=self.item_list.index(item)
            self.item_list[:]=self.item_list[:idx]
            self.item_list.insert(0,item)
        else:
            #캐시 크기가 최대치를 넘을경우, 맨 마지막 item을 제거해줌
            if len(self.item_list)>self.length:
                self.removeItem(self.item_list[-1])
            self.hash[item.key]=item
            self.item_list.insert(0,item)

    def removeItem(self,item):
        del self.hash[item.key]
        del self.item_list[self.item_list.index(item)]