const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECT = 'REJECT';

class CustomPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined; // then方法要访问到所以放到this上
    this.reason = undefined; // then方法要访问到所以放到this上
    this.onResolvedCallbacks = []; // 专门存放成功的回调函数
    this.onRejectedCallbacks = []; // 专门存放失败的回调函数
    const resolve = (value) => {
      if (this.status === PENDING) {
        // 保证只在等待的时候进行更新
        this.status = RESOLVED;
        this.value = value;
        // 需要让成功的方法依次执行
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (value) => {
      // 保证只在等待的时候进行更新
      if (this.status === PENDING) {
        this.status = RESOLVED;
        this.value = value;
        // 需要让失败的方法依次执行
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    // 执行executor传入我们定义的成功和失败函数:把内部的resolve和reject传入executor中用户写的resolve, reject
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onfulfilled, onrejected) {
    if (this.status === RESOLVED) {
      onfulfilled(this.value);
    }
    if (this.status === REJECT) {
      onrejected(this.value);
    }
    // 处理异步的情况
    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => {
        onfulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onrejected(this.value);
      });
    }
  }
}
export default CustomPromise;
