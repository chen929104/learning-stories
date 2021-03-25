/**
 * 栈是一种线性的数据结构
 * 有先进后出的特性
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  /**
   * 元素入栈
   * 元素入栈是进行栈的最后一位
   * @param {*} element
   */
  push(element) {
    this.stack.push(element);
  }

  /**
   * 元素出栈
   * 元素出栈是将栈顶元素出栈
   * @returns element
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * 获取栈顶元素
   * 不改变栈的结构
   * @returns undefined | element
   */
  peek() {
    if (this.stack.length === 0) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }

  /**
   * 栈结构是否为空
   * @returns boolean
   */
  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   *  清空栈
   */
  clear() {
    this.stack = [];
  }

  /**
   * 获取栈元素的长度
   * @returns number
   */
  size() {
    return this.stack.length;
  }
}
export default Stack;
