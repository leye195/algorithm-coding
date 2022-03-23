const solution = (n, dirs) => {
  let coords = [0, 0];
  const board = [];
  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < n; j++) {
      tmp.push(0);
    }
    board.push(tmp);
  }

  for (let i = 0; i < dirs.length; i++) {
    const d = dirs[i];
    const [x, y] = coords;
    if (d === "L" && y - 1 >= 0) {
      coords[1] = y - 1;
    }
    if (d === "R" && y + 1 < dirs.length) {
      coords[1] = y + 1;
    }
    if (d === "U" && x - 1 >= 0) {
      coords[0] = x - 1;
    }
    if (d === "D" && x + 1 < dirs.length) {
      coords[0] = x + 1;
    }
  }

  console.log(coords[0] + 1, coords[1] + 1);
};

solution(5, ["R", "R", "R", "U", "D", "D"]);
