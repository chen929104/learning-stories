class Queue {
  constructor() {
    // 队列末尾的元素
    this.count = 0;
    // 队列头部的元素
    this.lowestCount = 0;
    this.item = {};
  }

  /**
   * 元素入队，在进入队列的时候要进入队列的末尾
   * @param {*} element
   */
  enqueue(element) {
    this.item[this.count] = element;
    this.count += 1;
  }

  /**
   * 元素出队，在出队时要把队列的前端出队
   * 删除队列元素
   * @returns underined | element
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.item[this.lowestCount];
    delete this.item[this.lowestCount];
    this.lowestCount += 1;
    return result;
  }

  /**
   * 获取下一个出队的元素
   * 不改变队列的数据
   * @returns underined | element
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.item[this.lowestCount];
    return result;
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
export default Queue;
