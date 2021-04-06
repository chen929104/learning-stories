import LinkedListNode from './linked-list-node';

const defaultEqualFn = (a, b) => a === b;

class LinkedList {
  constructor(equalsFn = defaultEqualFn) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new LinkedListNode(element);
    if (!node.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count += 1;
  }

  insert(element, index) {
    if (index <= 0 || index >= this.count) {
      return false;
    }
    const node = new LinkedListNode(element);
    // 头部插入
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      node.next = previous.next;
      previous.next = node.next;
    }
    this.count += 1;
    return true;
  }

  getElementAt(index) {
    if (index <= 0 || index > this.count) {
      return undefined;
    }
    let node = this.head;

    for (let i = 0; i < index && node !== null; i += 1) {
      node = node.next;
    }
    return node;
  }

  remove(element) {
    let previous = null;
    let current = this.head;
    while (current !== null) {
      if (this.equalsFn(element, current.value)) {
        previous.next = current.next;
        this.count -= 1;
        return current;
      }
      previous = current;
      current = current.next;
    }
    return undefined;
  }

  removeAt(index) {
    if (index <= 0 || index > this.count) {
      return undefined;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous;
      for (let i = 0; i < index; i += 1) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.count -= 1;
    return current.value;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i += 1) {
      if (this.equalsFn(element, current.value)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  toString() {}

  forEach(callback) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i += 1) {
      callback(current.value);
      current = current.next;
    }
  }

  getHead() {
    return this.head;
  }
}

export default LinkedList;
