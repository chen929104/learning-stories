class StackObject {
  constructor() {
    this.count = 0;
    this.stack = {};
  }

  /**
   * 向栈中插入元素
   * @param {*} element
   */
  push(element) {
    this.stack[this.count] = element;
    this.count += 1;
  }

  /**
   * 弹出栈顶元素
   * @returns undefined | element
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count -= 1;
    const result = this.stack[this.count];
    delete this.stack[this.count];
    return result;
  }

  /**
   *
   * @returns undefined ｜ element
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.count - 1];
  }

  /**
   * 获取栈是否为空
   * @returns boolean
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * 清空栈
   */
  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  /**
   * 获取栈的长度
   * @returns number
   */
  size() {
    return this.count;
  }

  /**
   * toString 方法
   * @returns string
   */
  toString() {
    let result = '';
    for (let i = 0; i < this.count; i += 1) {
      if (i !== 0) {
        result += ',';
      }
      result += this.stack[i];
    }
    return result;
  }
}

export default StackObject;
