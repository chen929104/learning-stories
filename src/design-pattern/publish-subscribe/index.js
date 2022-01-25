class EventEmitter {
  constructor() {
    this.list = {};
  }

  // 注册事件
  on(type, fn) {
    this.list[type] = this.list[type] || [];
    this.list[type].push(fn);
  }

  // 发布
  emit(type, ...arg) {
    const list = this.list[type];
    if (!list) {
      return false;
    }
    list.forEach((fn) => {
      fn(arg);
    });
    return true;
  }

  // 取消订阅
  off(type, fn) {
    const list = this.list[type];
    if (!list) {
      return false;
    }
    this.list[type] = list.filter((item) => {
      return item !== fn && item.fn !== fn;
    });
    return true;
  }

  // 执行一次
  once(type, fn) {
    const that = this;
    function on(...arg) {
      that.off(type, fn);
      fn(arg);
    }
    on.fn = fn;
    this.on(type, on);
  }
}

const eventEmitter = new EventEmitter();

export default eventEmitter;
