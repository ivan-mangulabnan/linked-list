class LinkedList {
  #head;

  prepend(value) {
    let node = new Node();
    node.value = value;

    if (!this.#head) {
      this.#head = node;
      return;
    }

    let temp = this.#head;
    node.next = temp;
    this.#head = node;
  }

  get head () {
    return this.#head;
  }
}

class Node {
  constructor () {
    this.value = null;
    this.next = null;
  }
}