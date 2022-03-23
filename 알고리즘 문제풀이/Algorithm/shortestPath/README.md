# 최단 경로 알고리즘

가장 짧은 경로를 찾는 알고리즘

- 다양한 문제 상황

  - 한 지점에서 다른 한 지점까지의 최단 경로
  - 한 지점에서 다른 모든 지점까지의 최단 경로
  - 모든 지점에서 다른 모든 지점까지의 최단 경로

- 각 지점은 그래프에서 노드로 표현
- 지점 간 연결된 도로는 그래프에서 간선으로 표현

## 다익스트라 (dijkstra)

O(ElogV)

- 특정 노드에서 출발하여 다른 모든 노드로 가는 최단 경로 계산
- 최단 경로 알고리즘은 음의 간선이 없을 때 정상 작동한다
  - 간선은 현실에서는 음의 간선으로 표현되지 않는다
- 해당 다익스트라 알고리즘은 greedy 알고리즘으로 분류된다
  - **매 상황에서 가장 비용이 적게 드는 노드를 선택해 임의의 과정을 반복한다**

### 동작 과정

- 출발 노드 설정
- 최단 거리 테이블 초기화 (INF로 설정, 자기 자신인 노드는 0)
- 방문하지 않은 인접 노드들 중 거리가 가장 짧은 노드 선택
- 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 최단거리 테이블 갱신
- 3번과 4번 반복

```
0 [0,2,5,1,0,0]
1 [0,0,3,2,0,0]
2 [0,3,0,0,0,5]
3 [0,0,3,0,1,0]
4 [0,0,1,0,0,2]
5 [0,0,0,0,0,0]

[0,INF,INF,INF,INF,INF]
[(0),2,5,1,INF,INF]
[(0),2,4,(1),2,INF]
[(0),(2),4,(1),2,4]
[(0),(2),3,(1),(2),4]
[(0),(2),(3),(1),(2),(4)]


//O(V^2) : V는 노드 갯수, 일반적으로 노드가 5000개 이하일 경우 현재 코드로 해결 가능

const dijkstra = (graph,start) => {
    const INF = Number.MAX_SAFE_INTEGER;

    const getSmallest = (distance,visited) => {
        let idx = 0;
        let minValue = INF;
        for(let i=0;i<distance.length;i++) {
            if(visited[i]===0&&minValue > distance[i]) {
                idx = i;
                minValue = distance[idx]
            }
        }
        return idx;
    }

    const distance = new Array(Number.MAX_SAFE_INTEGER).fill(INF);
    const visited = new Array(Number.MAX_SAFE_INTEGER).fill(0);
    let min = Number.MAX_SAFE_INTEGER;

    distance[start] = 0;
    visited[start] = 1;

    for(let i=0;i<graph[start].length;i++) {
        distance[graph[start][i][0]] = graph[start][i][1];
    }

    for(let i=0;i<n-1;i++) {
        const now = getSmallest(distance,visited);
        visited[now] = 1;

        for(let j=0;j<graph[now].length;j++) {
            const cost = distance[now] + graph[now][j][1];
            distance[graph[now][j][0]] = Math.min(distance[graph[now][j][0]],cost);
        }
    }


    for(let i=0;i<n;i++) {
        if(distance[i] === INF) {
            console.log("INF");
        } else {
            console.log(distance[i]);
        }
    }
}

```

매 상황마다 방문하지 않은 가장 비용이 적은 노드를 선택해 임의 과정을 반복하며, 단계를 거쳐 한 번 처리된
노드의 최단 거리는 고정되어 바뀌지 않는다.

- 테이블에는 각 노드까지의 최단 거리 정보가 저장된다.
- 완벽한 최단 경로를 구하기 위해서는 소스코드에 추가기능을 구현해야 된다.

10000개를 넘는 경우 위의 코드로 해결을 못하는 문제가 발생하는데
해결을 하기 위해서는 우선순위 큐 자료구조를 활용해야된다.

### Priority Queue (우선순위 큐)

heap 자료구조를 활용하여 구현 할 수 있다.

heap은 min heap 과 max heap으로 구분되며

- 완전 이진트리로 한 레벨을 모두 채워야 다음 레벨로 트리가 늘어난다.
- max heap: parent value >= child value
- min heap: parent value < child value (우선순위 큐를 구현하는데 사용할 수 있다)

leftIndex: parent*2 + 1
rightIndex: parent*2 - 1
parentIndex: (childIndex - 1) / 2

```
index [0,1,2,3,4,5]
value [1,4,8,5,2,3]

class Heap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex = (parentIndex) =>  parentIndex*2+1;
    getRightChildIndex = (parentIndex) => parentIndex*2-1;
    getParentIndex = (childIndex) => Math.floor((childIndex-1) / 2);

    peek = () => this.heap[0];

    insert = (key,value) => {
        const node = {[key]:value};
        this.heap.push(node);
        this.heapifyUp(); // min heap 구성
    }

    remove = () => {
        const count = this.heap.length;
        const rootNode = this.heap[0];

        if(count<=0) return null;
        if(count === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop();
            this.heapifyDown(); // min heap 구성
        }
        return rootNode;
    }

    heapifyUp = () => {
        let index = this.heap.length - 1;
        const lastInsertedNode = this.heap[index];

        while(index>0) {
            const parentIndex = this.getParentIndex(index);

            if(this.heap[parentIndex].key > lastInsertedNode.key) {
                this.heap[index] = this.heap[parentIndex];
                index = parentIndex;
            } else {
                break;
            }
        }

        this.heap[index] = lastI
    }

    heapifyDown = () => {
        let index = 0;
        const count = this.heap.length;
        const rootNode = this.heap[0];

        while(this.getLeftChildIndex(index) < count) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndx(index);

            const smallIndex = rightChildIndex < count && this.heap[rightChildIndex].key < this.heap[leftChildIndex] ? rightChildIndex : leftChildIndex;

            if(this.heap[smallIndex].key <= rootNode.key) {
                this.heap[index] = this.heap[smallIndex];
                index = smallIndex;
            } else {
                break;
            }
        }

        this.heap[index] = rootNode;
    }
}

const PriorityQueue extends Heap {
    constructor() {
        super();
    }

    enqueue = (priority,value) => this.insert(priority,value);
    dequeue = () => this.remove();
    isEmpty = () => this.heap.length <= 0;
}

```

## 플루이드워셜 (floyd warshall)

O(N^3)

- 모든 노드에서 다른 모든 노드까지의 최단 경로를 모두 계산한다.
- 2차원 테이블에 최단 거리 정보를 저장한다.
- dp 유형에 속한다. 3중 반복문을 이용해 테이블을 갱산
- 점화식: D[a][b] = min(D[a][b],D[a][k]+D[k][b])
  - a에서 b로 가는 최단 거리보다 a에서 k를 거쳐 b로 가는 거리가 더 짧은 검사한다.

```
const INF = 10000000;
const graph = [];

for(let i=0;i<n;i++) {
  const tmp = [];
  for(let j=0;j<n;j++) {
    if(i!==j) {
      tmp.push(INF);
    } else {
      tmp.push(0);
    }
  }
  graph.push(tmp);
}

...

for(let k=0;k<n;k++) {
  for(let i=0;i<n;i++) {
    for(let j=0;j<n;j++) {
      graph[i][j] = Math.min(graph[i][j],graph[i][k]+graph[k][j]);
    }
  }
}

for(let i=0;i<nli++) {
  for(let j=0;j<n;j++) {
    if(graph[i][j]!==INF) {
      console.log(i,j,graph[i][j]);
    }
  }
}

```
