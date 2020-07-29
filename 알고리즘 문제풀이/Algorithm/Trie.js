class Node {
  data;
  constructor(data) {
    this.data = data;
    for (let i = 0; i < 26; i++) {
      const tmp = String.fromCharCode(97 + i);
      this[tmp] = undefined;
    }
  }
}

class Trie {
  root;
  constructor(root) {
    this.root = root;
  }
  add = (word) => {
    let currentNode = this.root;
    let previouWhileChar = "";
    for (let i = 0; i < word.length; i++) {
      let currrentChar = word.charAt(i);
      previouWhileChar += currrentChar;
      if (currentNode[currrentChar] === undefined) {
        const newNode = new Node(previouWhileChar);
        currentNode[currrentChar] = newNode;
        currentNode = newNode;
      } else {
        currentNode = currentNode[currrentChar];
      }
    }
  };

  lookUp = (word) => {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let currentChar = word.charAt(i);
      currentNode = currentNode[currrentChar];
      if (currentNode.data === word) return currentNode;
    }
    return "no match";
  };
}
