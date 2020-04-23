from queue import PriorityQueue

def solution(scovile,k):
    answer=0
    q=PriorityQueue()
    for s in scovile:
        q.put(s)
    while(q.empty()==False):
        if(q.empty()==False):
            ele1=q.get()
        else:
            break
        if ele1>k:
            return answer
        if(q.empty()==False):
            ele2=q.get()
        else:
            break
        mixed=ele1+(ele2*2)
        q.put(mixed)
        answer+=1
    return -1
print(solution([1,2,3,9,10,12],7))
'''
#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    int answer = 0;
    priority_queue< int, vector<int>, greater<int> > pq;
    for(int i=0;i<scoville.size();i++)
        pq.push(scoville[i]);
    int e1=0,e2=0;
    while(!pq.empty()){
        if(!pq.empty()){
            e1=pq.top();
            pq.pop();
        }
        else
            break;
        if(e1>K)
            return answer;
        if(!pq.empty()){
            e2=pq.top();
            pq.pop();
        }
        else
            break;
        int mixed=e1+(e2*2);
        pq.push(mixed);
        answer++;
    }
    return -1;
}
'''