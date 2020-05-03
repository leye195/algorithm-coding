from queue import PriorityQueue
def solution(stock, dates, supplies, k):
    #answer=0
    q=PriorityQueue()
    
    
    
'''
#include <string>
#include <vector>
#include <queue>
using namespace std;

int solution(int stock, vector<int> dates, vector<int> supplies, int k) {
    int answer = 0;
    int idx=0;
    priority_queue< int, vector<int>, less<int> > q;
    for(int i=0;i<k;i++){
        if(idx<dates.size()&&i==dates[idx])
            q.push(supplies[idx++]);
        if(stock==0){
            stock+=q.top();
            q.pop();
            answer++;
        }
        stock--;
    }    
    return answer;
}
'''