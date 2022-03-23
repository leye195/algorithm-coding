# Graph

## 재귀함수 (Recursive function)

- 자기 자신을 다시 호출하는 함수

```
const foo = () => {
    console.log("foo called");
    foo();
}

foo();
```

- 종료 조건을 반드시 명시해야된다, 명시되지 않을 경우 무한히 호출 될 수 있다.

```
const foo = (i) => {
    if(i===100) return;

    console.log(`${i+1}번째 호출`);
    foo(i+1);
    console.log(`${i}번째 종료`)
}
foo(1);

//ex) factorial 구현
const factorial1 = (n) => {
    let result = 1;
    for(let i=1;i<=n;i++) {
        result*=i;
    }
    return 1;
}

const factorial2 = (n) => {
    if(n<=1) return 1;
    return n*factorial2(n-1);
}


//ex) 최대공약수 계산(유클리드 호제법)
/*
A,B에 대해서 (A>B) A를 B로 나눈 나머지를 R이라고 한다.
이 때 A와 B의 최대 공약수는 B와 R의 최대공약수와 같다
*/

const gcd1 = (a,b) => {
    if(a<=b) {
        const tmp = a;
        a = b;
        b = a;
    }

    while(a%b!==0)
        const r = a%b;
        a = b;
        b = r;
    )

    return b;
}

const gcd2 = (a,b) => {
    if(a%b===0) return b;
    return gcd(a,a%b);
}


```

- stack을 활용하는 방법도 있음, 컴퓨터가 함수를 연속적으로 호출하는 경우 컴퓨터 메모리 내부 스택에 쌓여 불리해지기 때문

## DFS, BFS

### DFS (깊이우선 탐색)

그래프에서 깊은 부분은 우선적으로 탐색하는 알고리즘

- stack 혹은 재귀를 활용하며 다음과 같은 동작 과정을 거친다.
  - 탐색 시작 노드를 스택에 삽입, 방문 처리
  - 스택 최상단 노드에 방문 하지 않은 인접노드가 하나라도 있는 경우 스택에 넣고 방문 처리
  - 방문하지 않은 인접 노드가 없는 경우 스택에서 최상단 노드를 꺼낸다
  - 2번 과정이 수행되지 않을때 까지 반복

```
const dfs = (graph,visited,v) => {
    visited[v] = 1;
    for(let i=0;i<graph[v].length;i++) {
        if(!visited[graph[v][i]]) dfs(graph,visited,graph[v][i]);
    }
}


dfs(graph,visited,1);
```

### BFS (넓이우선 탐색)

그래프에서 가까운 노드부터 우선적으로 탐색하는 알고리즘

- queue를 이용하며, 다음과 같은 동작 과정을 거친다.
  - 탐색 시작노드를 큐에 삽입하고 방문 처리
  - 큐에서 노드를 꺼낸 뒤 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리
  - 2번을 수행 할 수 없을 때 까지 반복

```
const bfs = (graph,visited,v) => {
    const q=[v];
    visited[v] = 1;

    while(q.length) {
        const fr = q.shift();
        for(let i=0;i<graph[fr].length;i++) {
            if(!visited[graph[fr][i]]) {
                visited[graph[fr][i]] = 1;
                q.push(graph[fr][i]);
            }
        }
    }
}

bfs(graph,visited,1);
```
