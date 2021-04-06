import LinkedListNode from './linked-list-node';

class DoublyLinkedListNode extends LinkedListNode {
  constructor(value, next, prev) {
    super(value, next);
    this.prev = prev;
  }
}

export default DoublyLinkedListNode;
