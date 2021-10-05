/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const map = {};
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    map[employee.id] = employee;
  }

  const dfs = (id) => {
    const employee = map[id];
    let ans = employee.importance;
    for (let i = 0; i < employee.subordinates.length; i++)
      ans += dfs(employee.subordinates[i]);
    return ans;
  };
  return dfs(id);
};
