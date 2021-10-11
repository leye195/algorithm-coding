/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let count = 0;
  const visited = new Array(rooms.length).fill(0);
  const q = [0];

  while (q.length) {
    const tmp = q.shift();
    if (!visited[tmp]) visited[tmp] = 1;
    count += 1;

    for (let i = 0; i < rooms[tmp].length; i++) {
      const room = rooms[tmp][i];
      if (!visited[room]) {
        q.push(room);
        visited[room] = 1;
      }
    }
  }
  return count === rooms.length;
};
