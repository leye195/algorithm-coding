/* 
Trie 기본 구조
*/
class Node {
  constructor(value = "") {
    this.value = value;
    this.child = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert = (s) => {
    let currentNode = this.root;
    for (let i = 0; i < s.length; i++) {
      const currentChar = s.charAt(i);
      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new Node(currentChar);
      }
      currentNode = currentNode.child[currentChar];
    }
    currentNode.end = true;
  };
  search = (s) => {
    let currentNode = this.root;
    for (let i = 0; i < s.length; i++) {
      const currentChar = s.charAt(i);
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar];
      } else {
        return "";
      }
    }
    return currentNode.value;
  };
}
