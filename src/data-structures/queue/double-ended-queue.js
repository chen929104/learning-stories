class DoubleEndedQueue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.item = {};
  }

  /**
   * 向队列的前端进行添加元素有三种情况
   * 1 队列为空，可以直接加在队列的后端把count加1
   * 2 lowestCount不为0 有的队列已经移除类这时候把元素到前端只要把lowestCount-1
   * 3 lowestCount为0 这情况可以使用负值根据2的逻辑进行处理。这里参考数组思想把所有的节点向后移一位
   *
   * @param {*} element
   */
  addFront(element) {
    if (this.isEmpty) {
      this.addBack(element);
      return;
    }
    if (this.lowestCount > 0) {
      this.lowestCount -= 1;
      this.item[this.lowestCount] = element;
      return;
    }

    for (let i = this.count; i > this.lowestCount; i -= 1) {
      this.item[i] = this.item[i - 1];
    }
    this.item[this.lowestCount] = element;
    this.count += 1;
  }

  /**
   * 向队列的末尾加一个元素
   * @param {*} element
   */
  addBack(element) {
    this.item[this.count] = element;
    this.count += 1;
  }

  /**
   * 队列的头部出队
   * @returns undefined | element
   */
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.item[this.lowestCount];
    delete this.item[this.lowestCount];
    this.lowestCount += 1;
    return result;
  }

  /**
   * 队列的尾部出队
   * @returns undefined | element
   */
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count -= 1;
    const result = this.item[this.count];
    delete this.item[this.count];
    return result;
  }

  /**
   * 获取队列的头部元素
   * 不改变队列的数据
   * @returns undefined | element
   */
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[this.lowestCount];
  }

  /**
   * 获取队列的尾部元素
   * 不改变队列的数据
   * @returns undefined | element
   */
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[this.count - 1];
  }

  /**
   * 清空队列
   * 当队列不为空时就出队
   */
  clean() {
    while (!this.isEmpty()) {
      this.dequeue();
    }
  }

  /**
   * 判断队列是否为空
   * 头部节点的和尾部节点是同一个则为空
   * @returns boolean
   */
  isEmpty() {
    return this.count === this.lowestCount;
  }

  /**
   * 获取队列的长度
   * @returns number
   */
  size() {
    return this.count - this.lowestCount;
  }

  /**
   * toString 方法
   * @returns string
   */
  toString() {
    let result = '';
    for (let i = this.lowestCount; i < this.count; i += 1) {
      if (i !== this.lowestCount) {
        result += ',';
      }
      result += this.stack[i];
    }
    return result;
  }
}

export default DoubleEndedQueue;
