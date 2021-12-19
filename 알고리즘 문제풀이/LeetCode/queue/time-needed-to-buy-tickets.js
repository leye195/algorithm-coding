/**
 * https://leetcode.com/problems/time-needed-to-buy-tickets/submissions/
 *
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let ans = 0;
  const ticketObj = tickets.map((ticket, idx) => ({
    pos: idx,
    ticket,
  }));

  while (ticketObj.length) {
    const { ticket, pos } = ticketObj[0];

    if (ticket > 0) {
      ticketObj.shift();
      ticketObj.push({ pos, ticket: ticket - 1 });
      ans++;
    } else {
      ticketObj.shift();
    }

    if (
      ticketObj[ticketObj.length - 1].pos === k &&
      ticketObj[ticketObj.length - 1].ticket === 0
    )
      return ans;
  }
};
