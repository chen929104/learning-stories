// 模拟数组插入元素的操作
// eslint-disable-next-line no-extend-native
Array.prototype.add = function (element, index) {
  if (index < 0 || index > this.length) {
    return undefined;
  }
  for (let i = this.length - 1; i >= index; i -= 1) {
    this[i + 1] = this[i];
  }
  this[index] = element;
  return this;
};

// 模拟数组移除元素操作
// eslint-disable-next-line no-extend-native
Array.prototype.delete = function (index) {
  if (index < 0 || index > this.length) {
    return undefined;
  }
  for (let i = index; i < this.length; i += 1) {
    this[i] = this[i + 1];
  }
  this.pop();
  return this;
};

const demo = [1, 2, 3];
demo.add(222, 1);
console.log(demo);
demo.delete(2);
console.log(demo);
