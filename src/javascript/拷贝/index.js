// 深拷贝和浅拷贝

/**
 * 1 浅拷贝是对于对象指针的复制简单的说对于基本类型可以保证复制的是内容,对于复杂的类型复制的是引用,复制一个引用指向同一个内存地址
 * 2 深拷贝是将其中所有的数据都进行拷贝,不限于引用的拷贝,修改数据的时候不进行互相的影响
 */

// 浅拷贝的实现方式

const obj = { a: { b: 1 } };

// Object.assign
// eslint-disable-next-line prefer-object-spread
const obj1 = Object.assign({}, obj);

// 展开运算符...
const obj2 = { ...obj1 };

// Array.prototype.concat()
const arr = [obj2];
const arr1 = arr.concat();

// Array.prototype.slice()
const arr2 = arr1.slice();

// 深拷贝的实现方式

// JSON.parse(JSON.stringify())

/**
 * 借住json 的形式是将对象转换为字符串,再将字符串进行解析,因为通过字符串进行的解析可能性能比较差。其次在进行json序列化的时候
 * 对不符合可以进行序列化的数据可能会报错
 * 当存在 undefined Symbol function 循环引用时可能会出错
 * undefined Symbol function 会被直接抛弃
 * 循环引用会直接报错
 * 需要手动进行对对象 toJSON 方法重写保证安全的进行序列化
 *
 */
const arr3 = JSON.parse(JSON.stringify(arr2));

/**
 * 循环遍历
 * 1 考虑数组
 * 2 考虑对象
 * 3 考虑方法
 * 4 考虑循环引用
 */

function deepClone(object, map = new WeakMap()) {
  // 假值不需要出来 undefined null NaN false 0 ''
  if (!object) {
    return object;
  }

  if (object instanceof Date) {
    return new Date(object);
  }

  if (object instanceof RegExp) {
    return new RegExp(object);
  }

  if (typeof object !== 'object') {
    return object;
  }

  if (map.get(object)) {
    return map.get(object);
  }

  const cloneObj = new object.constructor();

  map.set(object, cloneObj);

  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (Object.hasOwnProperty.apply(object, key)) {
      cloneObj[key] = deepClone(object[key], map);
    }
  }
  return cloneObj;
}

deepClone(arr3);
