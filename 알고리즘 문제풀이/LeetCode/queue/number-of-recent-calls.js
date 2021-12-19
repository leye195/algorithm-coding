// https://leetcode.com/problems/number-of-recent-calls/submissions/

const RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  const { requests } = this;

  requests.push(t);

  while (requests[0] < t - 3000) {
    requests.shift();
  }
  return requests.length;
};
