# new 操作符

1 创建了一个空对象 2 设置原型，将 prototype 绑定 3 绑定 this,执行构造函数 4 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象

```js
function myNew(fn, ...args) {
  if (typeof fn !== 'function') {
    return Error('is not a function');
  }

  const obj = {};
  const prototype = fn.prototype;

  obj.prototype = prototype;

  const constructor = prototype.constructor;

  const result = constructor.apply(obj, args);

  return result && typeof result === 'object' ? result : obj;
}
```
