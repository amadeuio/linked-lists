class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
}

// to visualize what the linked list looks like
myExamleList = {
  head: {
    data: "Node 1",
    next: {
      data: "Node 2",
      next: {
        data: "Node 3",
        next: null,
      },
    },
  },
};

// create a new LinkedList and set the head to our new Node
let myList = new LinkedList();
myList.append("Node 1");
myList.append("Node 2");

console.log(myList);
