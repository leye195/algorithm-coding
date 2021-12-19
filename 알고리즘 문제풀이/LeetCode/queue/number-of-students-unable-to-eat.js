// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let count = 0;

  while (count < students.length && students.length) {
    if (students[0] !== sandwiches[0]) {
      students.push(students.shift());
      count++;
    } else {
      students.shift();
      sandwiches.shift();
      count = 0;
    }
  }

  return students.length;
};
