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
}

// create a new LinkedList and set the head to our new Node
let myList = new LinkedList();

console.log(myList);
