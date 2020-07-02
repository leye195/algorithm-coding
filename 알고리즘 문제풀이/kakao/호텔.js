function find(p, x) {
  if (p.get(x) === undefined) return x;
  p.set(x, find(p, p.get(x)));
  return p.get(x);
}
function solution(k, room_number) {
  let answer = [],
    rooms = new Map();
  answer = room_number.map((room) => {
    if (rooms.get(room) === undefined) {
      rooms.set(room, find(rooms, room + 1));
      return room;
    } else {
      let p = find(rooms, room);
      rooms.set(p, find(rooms, p + 1));
      return p;
    }
  });
  return answer;
}
