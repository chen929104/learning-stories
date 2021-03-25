import LinkedListNode from './linked-list-node';

export default class LinkedList {
  constructor() {
    /** 链表的头节点 */
    this.head = null;
    /** 链表的尾部 */
    this.tail = null;
  }

  /**
   * 向头部添加节点
   * @param {*} value
   * @return {LinkedList}
   */

  prepend(value) {
    /** 创建一个新节点 */
    const newNode = new LinkedListNode(value, this.head);
    /** 把链表的头部指向节点 */
    this.head = newNode;
    /** 如果链表为空把尾部也指向节点 */
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  /**
   * 向尾部添加节点
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    /** 创建一个新的节点 */
    const newNode = new LinkedListNode(value, this.tail);

    /** 如果头部节点为空则把头部节点,和尾部节点指向节点指向节点 */
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    /** 把尾部节点的next直线新节点 */
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    // 如果头部是需要删除的节点
    while (this.head.value === value) {
      this.head = this.head.next;
    }
  }
}
