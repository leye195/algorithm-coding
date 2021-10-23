/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((x, y) => x - y);
  students.sort((x, y) => x - y);

  return students.reduce((x, y, idx) => x + Math.abs(y - seats[idx]), 0);
};
