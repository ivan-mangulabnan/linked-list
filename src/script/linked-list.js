export class LinkedList {
  #head = null;

  append(value) {
    let node = new Node();
    node.value = value;

    if (this.#head) {
      let temp = this.#head;

      while(temp.next) {
        temp = temp.next;
      }

      temp.next = node;
      return;
    }

    this.head = node;
  }

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