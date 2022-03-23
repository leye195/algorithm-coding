class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (index) => index * 2 - 1;
  getRightChildIndex = (index) => index * 2 + 1;
  getParentIndex = (index) => Math.floor((index - 1) / 2);

  insert = (key, value) => {
    const node = { [key]: value };
    this.heap.push(node);
    this.heapifyUp();
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count === 0) return null;
    else if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  };

  heapifyUp = () => {
    const index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex][key] > lastInsertedNode[key]) {
        this.heap[parentIndex] = this.heal[index];
        index = parentIndex;
      } else {
        break;
      }
    }

    this.heap[index] = lastInsertedNode;
  };

  heapifyDown = () => {
    const index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[0];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const smallIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex][key] < this.heap[leftChildIndex][key]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallIndex].key <= rootNode.key) {
        this.heap[smallIndex] = this.heap[0];
        index = smallIndex;
      } else {
        break;
      }
    }

    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

export default PriorityQueue;
