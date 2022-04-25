const obj = { name: 1 };

const proxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver);
  },
  has(target, key) {
    return Reflect.has(target, key);
  },
  deleteProperty(target, key) {
    return Reflect.deleteProperty(target, key);
  },
  ownKeys(target, key) {
    return Reflect.ownKeys(target, key);
  },
  getOwnPropertyDescriptor(target, key) {
    return Reflect.getOwnPropertyDescriptor(target, key);
  },
  defineProperty(target, key, propDesc) {
    return Reflect.defineProperty(target, key, propDesc);
  },
  preventExtensions(target) {
    return Reflect.preventExtensions(target);
  },
  getPrototypeOf(target) {
    return Reflect.getPrototypeOf(target);
  },
  isExtensible(target) {
    return Reflect.isExtensible(target);
  },
  setPrototypeOf(target, proto) {
    return Reflect.setPrototypeOf(target, proto);
  },
  apply(target, object, args) {
    return Reflect.apply(target, object, args);
  },
  construct(target, args) {
    return Reflect.constructor(target, args);
  },
});

console.log(proxy.name);
