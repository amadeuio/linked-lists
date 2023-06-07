class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // by default the list will have a head property set to null
  constructor() {
    this.head = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    // call the Node Class constructor with the passed value
    const newNode = new Node(value);

    // if there are no items (head is null), set the head as the newNode
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // current initially is the head of the list
    let current = this.head;

    // navigate until the end of the list and set current to the last node
    while (current.next) {
      current = current.next;
    }

    // add the newNode at the end of the list
    current.next = newNode;
  }

  // adds a new node containing value to the start of the list
  preapend(value) {
    const newNode = new Node(value);

    // the new node points to the current head of the list
    newNode.next = this.head;

    // the new node becomes the new head of the list
    this.head = newNode;
  }

  // returns the total number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;

    // count every step until next is null
    while (current) {
      current = current.next;
      count++;
    }

    return count;
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
myList.preapend("First");

console.log(myList.size());
