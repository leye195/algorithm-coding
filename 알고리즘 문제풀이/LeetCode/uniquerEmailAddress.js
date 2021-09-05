/**
 * Set 활용 문제
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
  let emailList = new Set();
  for (let i = 0; i < emails.length; i++) {
    let [localName, domainName] = emails[i].split("@");
    localName = localName.replace(/\./g, "");
    const start = localName.indexOf("+");

    emailList.add(
      `${start > 0 ? localName.slice(0, start) : localName}@${domainName}`
    );
  }
  return emailList.size;
};
