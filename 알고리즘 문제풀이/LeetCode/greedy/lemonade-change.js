/**
 * https://leetcode.com/problems/lemonade-change/
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange1 = function (bills) {
  const money = {
    5: 0,
    10: 0,
    15: 0,
    20: 0,
  };

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    let payback = bill - 5;
    money[bill] += 1;

    if (payback > 0) {
      let tmp = 20;
      while (payback > 0 && tmp > 0) {
        if (payback >= tmp && money[tmp]) {
          money[tmp] -= 1;
          payback -= tmp;
        } else {
          tmp -= 5;
        }
      }
      if (tmp <= 0) return false;
    }
  }
  return true;
};

var lemonadeChange2 = function (bills) {
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];

    if (bill === 5) five += 1;
    else if (bill === 10) {
      if (five === 0) return false;
      five -= 1;
      ten += 1;
    } else {
      if (five > 0 && ten > 0) {
        ten -= 1;
        five -= 1;
      } else if (five >= 3) five -= 3;
      else {
        return false;
      }
    }
  }
  return true;
};
