/**
 *  链表的一个节点
 *  value保存节点的值
 *  next指向下一个节点
 */
export default class LinkedListNode {
  constructor(value, next = undefined) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : this.value.toString();
  }
}
