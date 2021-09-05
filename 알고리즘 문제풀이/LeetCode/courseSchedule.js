/**
 * bfs 활용 및 indegree, cycle 체크
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const answer = [];
  const courses = new Array(numCourses).fill([]);
  const indegree = new Array(numCourses).fill(0);
  const preRequisitesLength = prerequisites.length;

  const bfs = (courses) => {
    const q = [];
    for (let i = 0; i < numCourses; i++) {
      if (indegree[i] === 0) q.push(i);
    }

    while (q.length > 0) {
      const tmp = q.shift();
      answer.push(tmp);

      for (let i = 0; i < numCourses; i++) {
        if (courses[tmp][i]) {
          indegree[i]--;

          if (indegree[i] === 0) q.push(i);
        }
      }
    }
  };

  for (let i = 0; i < numCourses; i++) {
    const arr = [];
    for (let j = 0; j < numCourses; j++) {
      arr.push(0);
    }
    courses[i] = [...arr];
  }

  for (let i = 0; i < preRequisitesLength; i++) {
    const [x, y] = prerequisites[i];
    courses[y][x] = 1;
    indegree[x] += 1;
  }

  bfs(courses);
  if (answer.length === numCourses) return answer;
  return [];
};
findOrder(3, [
  [1, 0],
  [1, 2],
  [0, 1],
]);
findOrder(3, [
  [0, 1],
  [1, 2],
  [2, 0],
]);
findOrder(2, [
  [0, 1],
  [1, 0],
]);

findOrder(2, []);
findOrder(2, [[1, 0]]);
findOrder(1, []);
findOrder(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
]);

/**
var findOrder = function (numCourses, prerequisites) {
    const answer = [];
    const courses = new Array(numCourses).fill([]);
    const courseList = new Array(numCourses).fill(0);
    const preRequisitesLength = prerequisites.length;
  
    const bfs = (courses) => {
      const q = [];
      for (let i = 0; i < numCourses; i++) {
        if (courseList[i] === 0) q.push(i);
      }
  
      while (q.length > 0) {
        const tmp = q.shift();
        answer.push(tmp);
  
        for (let i = 0; i < numCourses; i++) {
          if (courses[tmp][i]) {
            courseList[i]--;
  
            if (courseList[i] === 0) q.push(i);
          }
        }
      }
    };
  
    if (!preRequisitesLength.length) {
    }
  
    for (let i = 0; i < numCourses; i++) {
      const arr = [];
      for (let j = 0; j < numCourses; j++) {
        arr.push(0);
      }
      courses[i] = [...arr];
    }
  
    if (preRequisitesLength > 0) {
      for (let i = 0; i < preRequisitesLength; i++) {
        const [x, y] = prerequisites[i];
        courses[y][x] = 1;
        courseList[x] += 1;
      }
    } else {
      for (let i = 0; i < numCourses - 1; i++) {
        courses[i + 1][i] = 1;
        courseList[i] += 1;
      }
    }
  
    bfs(courses);
    if(answer.length === numCourses) return answer;
    return [];
  };
 */
