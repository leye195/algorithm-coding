/**
 * https://leetcode.com/problems/teemo-attacking
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration1 = function (timeSeries, duration) {
  let ans = 0;
  let st = [];
  for (let i = 0; i < timeSeries.length; i++) {
    const startTime = timeSeries[i];
    const endTime = timeSeries[i] + duration - 1;

    if (st.length) {
      const [prevStart, prevEnd] = st[st.length - 1];

      if (startTime <= prevEnd) {
        st.pop();
        st.push([prevStart, endTime]);
      } else {
        st.push([startTime, endTime]);
      }
    } else {
      st.push([startTime, endTime]);
    }
  }

  while (st.length) {
    const [startTime, endTime] = st.pop();
    ans += endTime - startTime + 1;
  }

  return ans;
};

const findPoisonedDuration2 = function (timeSeries, duration) {
  let ans = 0;
  const len = timeSeries.length;

  if (len === 0) return 0;

  for (let i = 0; i < len - 1; i++) {
    ans += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }
  return ans + duration;
};
