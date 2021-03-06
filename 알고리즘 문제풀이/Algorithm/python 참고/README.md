# 문제풀이시 참고하기

시간제한이 1초인 문제 경우

- n 범위가 500인 경우: 시간 복잡도가 O(n3)인 알고리즘 설계하면 통과 가능
- n 범위가 2000인 경우: 시간 복잡도가 O(n2)인 알고리즘 설계시 통과 가능
- n 범위가 100000인 경우: 시간 복잡도가 O(nlogN)인 알고리즘 설계시 통과 가능
- n 범위가 10000000인 경우: 시간 복잡도가 O(N)인 알고리즘 설계시 통과 가능

### 입력

```
input().split(" ") : ["1","2","3"]
map(int,input().split(" )): map([1,2,3])

n = sys.stdin.readline() //이것은 한줄을 통째로 입력받아 오는 함수로, input()을 사용할 때보다
//빠른 속도를 자랑합니다

```

### 지수 표현 방식

- 1e9 -> 10의 9제곱이 되는데, 지수 표현은 임의의 큰 수를 표현하기 위해 자주 사용된다.
- 최단 경로 알고리즘에서 도달할수 없는 노드에 대해서 최단거리를 무한INF로 설정하는데, 이 때 최댓값이 10억 미만일 경우 무한의 값으로 1e9를 활용가능

### 집합

```
a=set([1,2,3])
b=set([2,3,4])
print(a|b) //합집합
print(a&b) //교집합
print(a-b) //차집합
```

### 큐 구조의 경우

```
python에서 큐 구현시 deque를 활용하는게 더 좋음
from collections import deque

queue = deque()
queue.popleft() //list의 pop(0)보다 시간 복잡도에서 우수함, deque는 내부적으로 linkedList로 되어있어
//O(1)의 복잡도를 가짐
queue.append()
```

### 람다 표현식 (익명함수로 볼 수 있음)

```
//함수를 매우 간단하게 작성 가능, 특정 기능을 수행하는 함수를 한 줄에 작성 할 수 있음
(lambda a,b: a+b)(3,7) //10

//정렬 기준을 명시하고자 할 때 활용 가능
sorted(array,key=lambda x:x[1])

//여러 리스트에 적용
list1=[1,2,3,4,5]
list2=[6,7,8,9,1]
result = list(map(lambda a,b:a+b,list1,list2)) //[7,9,11,13,6]

```

### 유용 lib

- itertools: 반복되는 형태의 데이터를 처리하는 기능을 제공, 순열과 조합 기능 제공
  permutations(): 순열
  combinations(): 조합
  product(): n개를 뽑는 모든 순열 구하기 (중복 허용)
  combinations_with_replacement(): n개를 뽑는 모든 조합(중복 허용)

- heapq: 힙 기능을 재공, 우선순위 큐 기능을 구현하기 위해 사용
- bisect: 이진 탐색 기능을 제공
  bisect(arr,x): arr가 정렬되어 있다는 가정하에 x값이 들어갈 위치 반환하는데, x
  bisect_left(arr,x): arr가 정렬되어 있다는 가정하에 x값이 들어갈 위치 반환, 경계값은 왼쪽으로 포함
  arr에 동일한 값이 존재할 경우 동일값 위치 반환
  bisect_right(arr,x): arr가 정렬되어 있다는 가정하에 x값이 들어갈 위치 반환, 경계값은 오른쪽으로 포함
  arr에 동일한 값이 존재할 경우 동일 값 위치 바로 뒤 반환

- collections: deque, Counter 등의 유용 자료구조를 포함

### 웹 요청

```
import requests
url = ""
r = requests.get(url=target)
print(r.text) #or r.json()
```

kakao 2차의 경우 REST API 호출과 JSON format 데이터를 파싱해야 된다.</br>
REST (Representational State Transfer)</br>

- 자원: URI 이용
- 행위: HTTP 메서드 이용
- 표현: payload 이용

```
URI: "http://www.example.com/users"
HTTP METHOD: "POST"
Payload: {"id":"","password":""}
```

```
import json
user={
  "id":"",
  "password":"",
  "age":0,
  "hobby":[]
}
json_data = json.dumps(user,indent=4)
print(json_data)

# json.loads(jsonString) 문자열을 Python 타입으로 변경 가능
or

import json
user={
  "id":"",
  "password":"",
  "age":0,
  "hobby":[]
}
with open("user.json","w",encoding="utf-8") as file:
  json_data = json.dump(user,file,indent=4)
```

```
회원 정보처리 예제
target = "https://jsonplaceholder.typicode.com/users"
response = requests.get(url=target)

data = response.json()
name_list = []
for user in data:
  name_list.append(user["name"])
print(name_list)
```
