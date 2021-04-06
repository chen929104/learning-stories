import LinkedList from './linked-list';

const defaultEqualFn = (a, b) => a === b;

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEqualFn) {
    super(equalsFn);
    this.tail = undefined;
  }
}

export default DoublyLinkedList;
