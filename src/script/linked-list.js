export class LinkedList {
  #head = null;

  append (value) {
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

    this.#head = node;
  }

  prepend (value) {
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

  get size () {
    let count = 0;
    let temp = this.#head;
    
    while(temp) {
      temp = temp.next;
      count++;
    }
    
    return count;
  }

  get head () {
    return this.#head;
  }

  get tail () {
    let temp = this.head;

    while(temp.next) {
      temp = temp.next;
    }

    return temp;
  }

  at (index) {
    let i = 0;
    let temp = this.head;

    while(i < index && temp.next) {
      i++;
      temp = temp.next;
    }

    if (index > i) return "Provided index doesn't match the length of the list";
    return temp;
  }

  pop () {
    if (!this.head) return;
    let temp = this.head;

    while(temp.next) {
      if (!temp.next.next) {
        temp.next = null;
        return
      }
      temp = temp.next;
    }

    this.#head = null;
  }

  contains (value) {
    if (!this.head) return false;
    let temp = this.head;

    while(temp) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }

    return false;
  }

  find (value) {
    if (!this.head) return null;
    let temp = this.head;
    let index = 0;

    while(temp) {
      if (temp.value === value) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    
    return null;
  }
}

class Node {
  constructor () {
    this.value = null;
    this.next = null;
  }
}