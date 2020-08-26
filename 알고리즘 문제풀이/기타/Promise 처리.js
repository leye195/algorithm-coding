const a = () =>
  new Promise((resolve, reject) => {
    resolve("a");
  });

const b = (a) =>
  new Promise((resolve, reject) => {
    resolve(100);
  });
const c = (a) =>
  new Promise((resolve, reject) => {
    resolve(1000);
  });
const fetchAmounts = () => {
  let total = 0;
  total = a()
    .then((t) => Promise.all([b(t), c(t)]))
    .then((r) => r.reduce((x, y) => x + y, 0));
  return total;
};
fetchAmounts().then((r) => console.log(r));
